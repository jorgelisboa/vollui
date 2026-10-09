import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { nav, primaryWhatsapp } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-dark bg-ink-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Vollui, voltar ao início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] text-mist-300">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-snow">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={primaryWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[15px] font-semibold text-brand-400 underline-offset-4 hover:underline sm:inline"
          >
            WhatsApp (19) 99844-4748
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
