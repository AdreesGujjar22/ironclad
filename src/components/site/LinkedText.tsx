import { Link } from "@tanstack/react-router";
import { autolink } from "@/lib/autolink";

/** Renders FAQ answer text with relevant internal links woven in. */
export function LinkedText({ text, exclude, max }: { text: string; exclude?: string | undefined; max?: number | undefined }) {
  return (
    <>
      {autolink(text, { exclude, max }).map((seg, i) =>
        seg.to ? (
          <Link
            key={i}
            to={seg.to}
            className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary-glow"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  );
}
