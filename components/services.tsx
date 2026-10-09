import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { extraServices, services } from "@/lib/site";
import photo from "@/public/photos/video-porteiro.jpg";

export function Services() {
  return (
    <section id="servicos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-24 lg:px-8">
        <div>
          <SectionHeading
            title="Operação completa, presencial ou remota"
            description="Para condomínios, residências de alto padrão e empresas. Da portaria ao monitoramento, cuidamos de toda a segurança do seu espaço."
          />
          <div className="relative mt-12 hidden aspect-4/5 max-w-sm overflow-hidden rounded-lg lg:block">
            <Image
              src={photo}
              alt="Vídeo porteiro IP instalado na entrada de um condomínio"
              fill
              sizes="24rem"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div>
          <dl className="border-t border-line">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-2 border-b border-line py-8 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <dt className="font-display text-xl font-semibold text-ink-950">
                  {service.title}
                </dt>
                <dd className="leading-relaxed text-slate-600">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 leading-relaxed text-slate-600">
            <span className="font-semibold text-ink-950">Também fazemos:</span>{" "}
            {extraServices.join(", ").toLowerCase()}.
          </p>

          <a
            href="#cotacao"
            className="mt-8 inline-block font-semibold text-brand-700 underline decoration-brand-700/30 hover:decoration-brand-700"
          >
            Pedir uma proposta para o meu espaço
          </a>
        </div>
      </div>
    </section>
  );
}
