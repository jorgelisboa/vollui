"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { nav, primaryWhatsapp } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="grid size-11 place-items-center text-snow"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Principal"
          className="absolute inset-x-0 top-16 border-b border-line-dark bg-ink-950 px-4 pb-6"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line-dark">
                <a
                  href={item.href}
                  onClick={close}
                  className="block py-4 font-display text-lg text-snow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={primaryWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-6 block font-semibold text-brand-400"
          >
            WhatsApp (19) 99844-4748
          </a>
        </nav>
      )}
    </div>
  );
}
