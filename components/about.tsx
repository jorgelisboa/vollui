import Image from "next/image";

import photo from "@/public/photos/instalacao-camera.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg lg:order-2">
          <Image
            src={photo}
            alt="Técnico da Vollui instalando uma câmera de segurança"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            placeholder="blur"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink-950 text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            Sua segurança é a nossa prioridade
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            A Vollui transforma ambientes expostos em espaços de segurança
            controlada, com equipe no local ou monitoramento remoto. Usamos
            sistemas de última geração, escolhidos e configurados para o que
            cada cliente realmente precisa.
          </p>

          <figure className="mt-14 border-t border-line pt-10">
            <blockquote className="font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink-950 text-pretty sm:text-[1.75rem]">
              “Excelentes profissionais, solucionaram o meu problema
              rapidamente com tecnologias que eu nem sabia que existiam.”
            </blockquote>
            <figcaption className="mt-5 text-slate-600">Grupo Calone</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
