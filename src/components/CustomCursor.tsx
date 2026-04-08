import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 5}px`;
        dotRef.current.style.top = `${mouseY - 5}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX - 18}px`;
        ringRef.current.style.top = `${ringY - 18}px`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    const raf = requestAnimationFrame(animate);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = '';
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
