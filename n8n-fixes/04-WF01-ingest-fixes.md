# WF01 Ingest — persist `file_id` so screenshots can actually be analyzed

## Problem

The `Classify Input` code node correctly extracts `file_id` from `msg.photo`, `msg.voice`, and `msg.document`. But the `Create Entry` SQL node never writes it to the database. So WF02 has no way to retrieve and OCR the image.

## Fix — `Create Entry` SQL node

Replace the existing query expression with:

```
={{ "INSERT INTO entries (user_id,conversation_id,source_type,raw_text,link_url,telegram_message_id,attachment_url,status) VALUES (" + $('Merge IDs').item.json.user_id + ",'" + $('Merge IDs').item.json.conv_id + "','" + $('Merge IDs').item.json.source_type + "','" + ($('Merge IDs').item.json.raw_text||'').replace(/'/g,"''") + "'," + ($('Merge IDs').item.json.link_url ? "'" + $('Merge IDs').item.json.link_url + "'" : "NULL") + ",'" + $('Merge IDs').item.json.telegram_msg_id + "'," + ($('Merge IDs').item.json.file_id ? "'tg://" + $('Merge IDs').item.json.file_id + "'" : "NULL") + ",'new') RETURNING id" }}
```

The only change: added `attachment_url` to the column list and a `tg://<file_id>` value when `file_id` is present.

WF02's vision branch then strips the `tg://` prefix and uses the file_id with Telegram's `getFile` API to download and OCR.

## Why `tg://` prefix

Telegram file_ids are not URLs — they are tokens that need to be exchanged via `bot.getFile(file_id)` to get a temporary download path. Storing them with a `tg://` scheme makes intent clear in the DB: "this is a Telegram file_id, not a public URL". WF02 detects the prefix and runs the resolution flow.

If you later move to S3-backed storage, you'd swap the value to `https://<bucket>/<key>` and WF02's HTTP fetch path would not need a Telegram getFile step.

## Optional: also persist file_id raw

If you want to query directly later, add a `telegram_file_id` column. Otherwise the `tg://` prefix in `attachment_url` is enough.

## No other changes needed

`Merge IDs` already passes through `file_id` (it does `...prev` spread), so the value flows naturally. Only the SQL needed updating.
