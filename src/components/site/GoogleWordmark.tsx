const letters: [string, string][] = [
  ["G", "text-g-blue"], ["o", "text-g-red"], ["o", "text-g-yellow"], ["g", "text-g-blue"], ["l", "text-g-green"], ["e", "text-g-red"],
];

export function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans font-semibold tracking-tight ${className}`} aria-label="Google">
      {letters.map(([l, c], i) => <span key={i} className={c} aria-hidden="true">{l}</span>)}
    </span>
  );
}
