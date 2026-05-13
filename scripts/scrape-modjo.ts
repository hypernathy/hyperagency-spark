/**
 * scrape-modjo.ts
 *
 * Extracts everything that a Modjo share-link exposes:
 *   - the call video (HLS stream → MP4)
 *   - the in-page transcript JSON (if served as XHR)
 *   - all captured XHR/fetch responses (for offline inspection)
 *   - scene-change frames OCR'd in Italian (slides shown in the demo)
 *   - call metadata decoded from the share-token
 *
 * Usage:
 *   bun run scripts/scrape-modjo.ts <share-url>
 *   bun run scripts/scrape-modjo.ts          # uses the default Cato/Eurocogen link
 *
 * Requirements on the host machine (NOT on the Lovable sandbox):
 *   - bun or node 20+
 *   - playwright with chromium installed:   bunx playwright install chromium
 *   - ffmpeg                                apt/brew install ffmpeg
 *   - tesseract + italian pack              apt install tesseract-ocr tesseract-ocr-ita
 *
 * Optional (for re-transcription if Modjo doesn't expose the transcript):
 *   - OPENAI_API_KEY env var → whisper-1 over the downloaded MP4
 */
import { chromium, type Page, type Response } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, writeFile, readdir, stat, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Buffer } from "node:buffer";

const DEFAULT_URL =
  "https://app.modjo.ai/call/eyJ1dWlkIjoiNjcwNjg4OGItZTUzNy00Yzg1LTgwYzItNjJjNTFkNWM1YzkxIiwidGVuYW50TmFtZSI6ImNhdG8iLCJzaGFyZXJOYW1lIjoiRmlsaXBwbyBDYWdvbCIsInNoYXJlcklkIjo2OX0=";

type ShareToken = {
  uuid: string;
  tenantName: string;
  sharerName: string;
  sharerId: number;
};

function decodeShareToken(shareUrl: string): ShareToken | null {
  const match = shareUrl.match(/\/call\/([A-Za-z0-9+/=_-]+)/);
  if (!match) return null;
  const raw = match[1].replace(/-/g, "+").replace(/_/g, "/");
  try {
    return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

function sh(cmd: string, args: string[], opts: { cwd?: string } = {}) {
  return new Promise<number>((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", cwd: opts.cwd });
    p.on("error", reject);
    p.on("exit", (code) => resolve(code ?? 0));
  });
}

async function captureFor(page: Page, outDir: string) {
  const xhrLog: Array<{
    url: string;
    method: string;
    status: number;
    contentType: string;
    bodyFile?: string;
  }> = [];
  const mediaUrls = new Set<string>();
  let xhrIdx = 0;

  page.on("response", async (res: Response) => {
    const url = res.url();
    const ct = res.headers()["content-type"] ?? "";
    const method = res.request().method();

    if (/\.m3u8(\?|$)/.test(url) || /application\/vnd\.apple\.mpegurl/i.test(ct)) {
      mediaUrls.add(url);
    }
    if (/\.mp4(\?|$)/.test(url)) mediaUrls.add(url);

    if (
      /^(application\/json|text\/)/i.test(ct) &&
      !/text\/html/i.test(ct) &&
      method !== "OPTIONS"
    ) {
      try {
        const buf = await res.body();
        if (buf.length === 0 || buf.length > 4_000_000) return;
        const idx = String(++xhrIdx).padStart(3, "0");
        const ext = ct.includes("json") ? "json" : "txt";
        const file = `xhr_${idx}.${ext}`;
        await writeFile(join(outDir, "xhr", file), buf);
        xhrLog.push({ url, method, status: res.status(), contentType: ct, bodyFile: file });
      } catch {
        /* response disposed */
      }
    }
  });

  await mkdir(join(outDir, "xhr"), { recursive: true });
  return { xhrLog, mediaUrls };
}

async function downloadHls(playlistUrl: string, outFile: string) {
  console.log(`\n→ Downloading HLS stream → ${outFile}`);
  await sh("ffmpeg", [
    "-y",
    "-loglevel",
    "warning",
    "-i",
    playlistUrl,
    "-c",
    "copy",
    "-bsf:a",
    "aac_adtstoasc",
    outFile,
  ]);
}

async function extractSlides(videoFile: string, slidesDir: string) {
  await mkdir(slidesDir, { recursive: true });
  console.log(`\n→ Extracting scene-change frames from ${videoFile}`);
  // gt(scene,0.15) catches significant visual cuts — good for slide/screen-share changes.
  await sh("ffmpeg", [
    "-y",
    "-loglevel",
    "warning",
    "-i",
    videoFile,
    "-vf",
    "select='gt(scene,0.15)',showinfo",
    "-vsync",
    "vfr",
    "-q:v",
    "2",
    join(slidesDir, "frame-%04d.jpg"),
  ]);
}

async function ocrSlides(slidesDir: string, ocrOut: string) {
  const files = (await readdir(slidesDir)).filter((f) => /\.jpg$/.test(f)).sort();
  if (files.length === 0) {
    console.log("  (no frames extracted — skipping OCR)");
    return;
  }
  console.log(`\n→ OCR'ing ${files.length} frames in Italian`);
  const chunks: string[] = [];
  for (const f of files) {
    const res = await new Promise<string>((resolve) => {
      const out: Buffer[] = [];
      const p = spawn("tesseract", [join(slidesDir, f), "-", "-l", "ita"], {
        stdio: ["ignore", "pipe", "ignore"],
      });
      p.stdout.on("data", (d) => out.push(d));
      p.on("exit", () => resolve(Buffer.concat(out).toString("utf8")));
    });
    chunks.push(`=== ${f} ===\n${res.trim()}\n`);
  }
  await writeFile(ocrOut, chunks.join("\n"));
}

async function maybeWhisper(videoFile: string, outFile: string) {
  if (!process.env.OPENAI_API_KEY) {
    console.log("\n(skipping Whisper — set OPENAI_API_KEY to enable)");
    return;
  }
  console.log("\n→ Transcribing audio via Whisper");
  const audio = videoFile.replace(/\.mp4$/, ".m4a");
  await sh("ffmpeg", ["-y", "-loglevel", "warning", "-i", videoFile, "-vn", "-c:a", "copy", audio]);
  const form = new FormData();
  form.set("model", "whisper-1");
  form.set("language", "it");
  form.set("response_format", "srt");
  form.set("file", new Blob([await Bun.file(audio).arrayBuffer()]), "call.m4a");
  const r = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form,
  });
  await writeFile(outFile, await r.text());
}

async function main() {
  const shareUrl = process.argv[2] ?? DEFAULT_URL;
  const token = decodeShareToken(shareUrl);
  if (!token) {
    console.error("Could not decode share token from URL.");
    process.exit(1);
  }

  const outRoot = join(process.cwd(), "scraped", "modjo", token.uuid);
  if (existsSync(outRoot)) await rm(outRoot, { recursive: true, force: true });
  await mkdir(outRoot, { recursive: true });

  await writeFile(
    join(outRoot, "share-token.json"),
    JSON.stringify({ shareUrl, ...token }, null, 2),
  );
  console.log(`Output dir: ${outRoot}`);
  console.log(`Decoded token:`, token);

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    locale: "it-IT",
    viewport: { width: 1440, height: 900 },
  });
  const page = await ctx.newPage();

  const { xhrLog, mediaUrls } = await captureFor(page, outRoot);

  console.log(`\n→ Opening ${shareUrl}`);
  await page.goto(shareUrl, { waitUntil: "networkidle", timeout: 60_000 });

  // Give the player a chance to bootstrap and load the manifest.
  await page.waitForTimeout(8_000);

  // Try to coax the video into starting so the HLS playlist is fetched.
  await page.evaluate(() => {
    const v = document.querySelector("video");
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  });
  await page.waitForTimeout(6_000);

  await page.screenshot({ path: join(outRoot, "page.png"), fullPage: true });
  const html = await page.content();
  await writeFile(join(outRoot, "page.html"), html);

  await writeFile(join(outRoot, "xhr-log.json"), JSON.stringify(xhrLog, null, 2));
  await writeFile(
    join(outRoot, "media-urls.txt"),
    [...mediaUrls].join("\n") + "\n",
  );

  await browser.close();

  console.log(`\nCaptured ${xhrLog.length} XHR responses, ${mediaUrls.size} media URLs.`);

  // Pick the first .m3u8 (master playlist) if present.
  const m3u8 = [...mediaUrls].find((u) => /\.m3u8(\?|$)/.test(u));
  const videoFile = join(outRoot, "call.mp4");
  if (m3u8) {
    await downloadHls(m3u8, videoFile);
  } else {
    const mp4 = [...mediaUrls].find((u) => /\.mp4(\?|$)/.test(u));
    if (mp4) {
      console.log("\n→ No HLS playlist; downloading direct MP4");
      await sh("ffmpeg", ["-y", "-loglevel", "warning", "-i", mp4, "-c", "copy", videoFile]);
    } else {
      console.log("\n⚠ No video URL captured. Inspect xhr-log.json + page.html for hints.");
    }
  }

  if (existsSync(videoFile) && (await stat(videoFile)).size > 0) {
    const slidesDir = join(outRoot, "slides");
    await extractSlides(videoFile, slidesDir);
    await ocrSlides(slidesDir, join(outRoot, "slides-ocr.txt"));
    await maybeWhisper(videoFile, join(outRoot, "transcript.srt"));
  }

  console.log(`\n✓ Done. Everything is in ${outRoot}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
