import { Link } from "@tanstack/react-router";
import { autolink } from "@/lib/autolink";

const linkCls = "font-medium text-primary-glow underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary-glow";

/**
 * Renders FAQ answer text with relevant internal links woven in (descriptive, keyword-rich anchors only).
 * When no keyword phrase in the answer maps to another page, an optional `cta` link is appended instead.
 */
export function LinkedText({
  text,
  exclude,
  max,
  cta,
}: {
  text: string;
  exclude?: string | undefined;
  max?: number | undefined;
  cta?: { label: string; to: string } | undefined;
}) {
  const segments = autolink(text, { exclude, max });
  const hasLink = segments.some((s) => s.to);
  return (
    <>
      {segments.map((seg, i) =>
        seg.to ? (
          <Link key={i} to={seg.to} className={linkCls}>
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
      {!hasLink && cta && cta.to !== exclude && (
        <>
          {" "}
          <Link to={cta.to} className={linkCls}>
            {cta.label}
          </Link>
          .
        </>
      )}
    </>
  );
}
