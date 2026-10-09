import { businessHours, contacts } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-snow text-balance sm:text-5xl sm:leading-[1.05]">
            Pronto para levar sua segurança a outro nível?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist-300">
            Fale direto com um especialista ou deixe seu pedido no formulário.
            A gente cuida da segurança para você focar no que importa.
          </p>
          <a
            href="#cotacao"
            className="mt-10 inline-flex items-center rounded-md bg-brand-500 px-6 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-brand-400"
          >
            Pedir cotação
          </a>
        </div>

        <div className="lg:pt-3">
          <ul className="border-t border-line-dark">
            {contacts.map((c) => (
              <li key={c.phone} className="border-b border-line-dark">
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-7"
                >
                  <span className="font-display text-xl text-snow">{c.name}</span>
                  <span className="text-lg text-mist-300 tabular-nums group-hover:text-brand-400">
                    {c.phone}
                    <span className="ml-3 text-[15px] font-semibold text-brand-400">
                      WhatsApp
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-mist-400">{businessHours}</p>
        </div>
      </div>
    </section>
  );
}
