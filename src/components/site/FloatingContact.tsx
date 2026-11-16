import { useEffect, useState } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { business } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

const actions = [
  { label: "Chat on WhatsApp", href: business.whatsapp, cls: "bg-whatsapp", Icon: WhatsAppIcon, external: true },
  { label: `Email ${business.email}`, href: `mailto:${business.email}`, cls: "bg-mail", Icon: Mail, external: false },
  { label: `Call ${business.phone}`, href: business.phoneHref, cls: "bg-gradient-primary", Icon: Phone, external: false },
];

/** Floating bottom-right contact button that fans out WhatsApp, email and phone. */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 sm:right-6">
      <ul id="quick-contact" className="flex flex-col items-center gap-3" aria-hidden={!open}>
        {actions.map((a, i) => (
          <li
            key={a.label}
            className="transition-all duration-300"
            style={{
              transitionDelay: open ? `${(actions.length - 1 - i) * 50}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.6)",
              pointerEvents: open ? "auto" : "none",
            }}
          >
            <a
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noreferrer" : undefined}
              aria-label={a.label}
              title={a.label}
              tabIndex={open ? 0 : -1}
              className={`${a.cls} flex h-14 w-14 items-center justify-center rounded-full text-paper shadow-deep transition-transform hover:scale-110`}
            >
              <a.Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="quick-contact"
        aria-label={open ? "Close contact options" : "Contact us"}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-deep transition-all duration-300 hover:scale-105 ${
          open ? "bg-background text-foreground ring-1 ring-border" : "bg-gradient-primary text-primary-foreground shadow-glow"
        }`}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
