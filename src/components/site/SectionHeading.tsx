import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow mb-5 flex items-center gap-3 data-[c=true]:justify-center" data-c={align === "center"}>
        <span className="h-px w-10 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-[1.1] md:text-5xl">{title}</h2>
      {text && <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>}
    </Reveal>
  );
}
