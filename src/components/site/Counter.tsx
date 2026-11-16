import { useEffect, useRef } from "react";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const run = (t: number) => {
        const p = Math.min(1, (t - start) / 1600);
        el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <>
      <span ref={ref}>{value}</span>
      {suffix}
    </>
  );
}
