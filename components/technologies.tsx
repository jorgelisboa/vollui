import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { technologies } from "@/lib/site";

export function Technologies() {
  return (
    <section id="tecnologias" className="bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title="Cada projeto combina a tecnologia certa para o lugar"
          description="Estudamos a rotina e os pontos vulneráveis de cada espaço antes de escolher um único equipamento."
        />

        <ul className="mt-16 grid border-t border-line-dark sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex items-start gap-5 border-b border-line-dark py-7"
            >
              <Image
                src={tech.image}
                alt=""
                className="size-16 shrink-0 rounded-full"
                sizes="64px"
              />
              <div>
                <h3 className="font-display text-lg font-medium text-snow">
                  {tech.name}
                </h3>
                <p className="mt-1 leading-relaxed text-mist-400">
                  {tech.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
