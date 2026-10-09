import Image from "next/image";

import { businessHours, contacts, nav } from "@/lib/site";
import logo from "@/public/brand/vollui-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink-950 text-mist-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Image src={logo} alt="Vollui, soluções tecnológicas" className="h-16 w-auto" />
          <p className="mt-6 max-w-sm leading-relaxed">
            Segurança eletrônica, controle de acesso e portaria remota para
            condomínios, residências e empresas.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-semibold text-snow">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-snow">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold text-snow">Contato</h2>
          <ul className="mt-4 space-y-2.5 tabular-nums">
            {contacts.map((c) => (
              <li key={c.phone}>
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-snow"
                >
                  {c.phone}
                </a>
              </li>
            ))}
            <li>{businessHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm sm:px-6 lg:px-8">
          © Vollui · Grupo Calone. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
