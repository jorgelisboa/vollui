import Image from "next/image";

import { QuoteForm } from "@/components/quote-form";
import { clients } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="bg-ink-950 pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-14 px-4 sm:px-6 lg:grid-cols-[1fr_26rem] lg:px-8 xl:grid-cols-[1fr_28rem]">
        <div className="lg:col-start-1">
          <h1 className="max-w-3xl font-display text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] text-snow text-balance sm:text-6xl lg:text-7xl">
            Tecnologia que protege grandes empreendimentos e empresas
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist-300 text-pretty sm:text-xl">
            Projetamos, instalamos e mantemos sistemas de controle de acesso,
            portaria remota e CFTV para condomínios, residências de alto padrão
            e empresas.
          </p>
        </div>

        <div
          id="cotacao"
          className="scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-l lg:border-line-dark lg:pl-12"
        >
          <QuoteForm />
        </div>

        <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
          <p className="text-[15px] text-mist-400">
            Shoppings, condomínios e marcas que já confiam na Vollui
          </p>
          <ul className="mt-6 grid grid-cols-3 border-t border-l border-line-dark">
            {clients.map((c) => (
              <li
                key={c.name}
                className="flex h-20 items-center justify-center border-r border-b border-line-dark px-4 sm:h-24 sm:px-6"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  className="h-auto max-h-8 w-auto max-w-full opacity-75 brightness-0 invert sm:max-h-9"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
