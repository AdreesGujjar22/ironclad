import { useState } from 'react';
import { Mail, MessageCircle, Phone, X } from 'lucide-react';

const actionClass =
  'flex size-[56px] items-center justify-center rounded-full text-white shadow-[0_6px_18px_rgba(0,0,0,0.2)] transition duration-200 hover:scale-110 hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#88D2A8]';

/** Quick contact actions, styled with Ironclad's existing green brand palette. */
export function FloatingContactMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-[110] flex flex-col items-center gap-3">
      <div
        aria-hidden={!open}
        className={`flex flex-col items-center gap-3 transition duration-300 ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        <a
          href="https://wa.me/16045403999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ironclad on WhatsApp"
          tabIndex={open ? 0 : -1}
          className={`${actionClass} bg-[#25D366]`}
        >
          <svg aria-hidden="true" viewBox="0 0 32 32" className="size-7 fill-current">
            <path d="M16.04 3.2A12.7 12.7 0 0 0 5.16 22.45L3.4 28.8l6.5-1.7a12.75 12.75 0 1 0 6.14-23.9Zm0 23.2c-1.87 0-3.7-.5-5.28-1.44l-.38-.23-3.86 1.01 1.03-3.76-.25-.39a10.47 10.47 0 1 1 8.74 4.81Zm5.75-7.85c-.32-.16-1.89-.93-2.18-1.03-.29-.1-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.18.22-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.58-.96-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.19.21-.32.32-.54.1-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.22 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.65s1.14 3.07 1.3 3.29c.18.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.1 1.89-.77 2.16-1.52.27-.76.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
          </svg>
        </a>
        <a
          href="mailto:info@ironcladcommercialfloors.ca"
          aria-label="Email Ironclad Commercial Floors"
          tabIndex={open ? 0 : -1}
          className={`${actionClass} bg-[#F43F5E]`}
        >
          <Mail aria-hidden="true" className="size-6" strokeWidth={2} />
        </a>
        <a
          href="tel:+16045403999"
          aria-label="Call Ironclad at (604) 540-3999"
          tabIndex={open ? 0 : -1}
          className={`${actionClass} bg-[#10B981]`}
        >
          <Phone aria-hidden="true" className="size-6" strokeWidth={2} />
        </a>
      </div>
      <button
        type="button"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`${actionClass} bg-black`}
      >
        {open ? <X aria-hidden="true" className="size-6" strokeWidth={2.2} /> : <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.9} />}
      </button>
    </div>
  );
}
