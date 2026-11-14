import { useEffect, useRef, useState } from "react";
import mark from "@/assets/ironclad-mark.png.asset.json";

const WORD = "IRONCLAD";
const DURATION = 2600;

export function IntroLoader() {
  const [phase, setPhase] = useState<"run" | "exit" | "done">("run");
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 600 : DURATION;
    document.documentElement.style.overflow = "hidden";
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = Math.round(eased * 100);
      if (countRef.current) countRef.current.textContent = String(n).padStart(3, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${eased})`;
      if (p < 1) raf = requestAnimationFrame(tick);
      else setPhase("exit");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    document.documentElement.style.overflow = "";
    const t = setTimeout(() => setPhase("done"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading Ironclad Commercial Floors"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background ${phase === "exit" ? "intro-exit" : ""}`}
    >
      <div className="intro-ceiling" />
      <div className="intro-floor" />
      <div className="intro-scan absolute inset-x-0 top-0 h-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_75%)]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative mb-10 flex h-40 w-40 items-center justify-center perspective-1200">
          <div className="intro-ring absolute inset-0 rounded-full" style={{ animation: "ring-x 4s linear infinite" }} />
          <div className="intro-ring absolute inset-3 rounded-full opacity-60" style={{ animation: "ring-y 3s linear infinite" }} />
          <div className="absolute inset-8 rounded-full bg-primary/20 blur-2xl" />
          <img src={mark.url} alt="" width={256} height={256} className="intro-mark relative h-24 w-24 object-contain drop-shadow-[0_0_25px_var(--primary)]" />
        </div>

        <h2 className="glitch font-display text-5xl font-bold tracking-[0.12em] md:text-7xl" data-text={WORD}>
          {WORD.split("").map((c, i) => (
            <span key={i} className="intro-letter" style={{ animationDelay: `${400 + i * 70}ms` }}>
              {c}
            </span>
          ))}
        </h2>
        <p className="intro-letter mt-4 font-mono text-sm tracking-[0.6em] text-primary-glow md:text-base" style={{ animationDelay: "1100ms" }}>
          COMMERCIAL FLOORS
        </p>

        <div className="mt-14 w-64 md:w-80">
          <div className="flex justify-between font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            <span>CALIBRATING SURFACE</span>
            <span><span ref={countRef}>000</span>%</span>
          </div>
          <div className="mt-3 h-px w-full overflow-hidden bg-border">
            <div ref={barRef} className="bg-gradient-primary h-full origin-left" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPhase("exit")}
        className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-primary-glow"
      >
        SKIP →
      </button>
    </div>
  );
}
