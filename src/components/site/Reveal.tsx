import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  dir?: "up" | "left" | "right" | "zoom";
  delay?: number;
  as?: ElementType;
};

export function Reveal({ children, className, dir = "up", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref} data-dir={dir} style={style} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
