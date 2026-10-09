import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { partnerCategories, partners } from "@/lib/site";

export function Partners() {
  return (
    <section id="integradores" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Instalamos e configuramos com o aval dos fabricantes"
          description="Somos integradores das principais marcas de segurança eletrônica do mercado."
        />

        <ul className="mt-16 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <li key={p.name} className="flex h-12 items-center">
              <Image
                src={p.logo}
                alt={p.name}
                className="h-auto max-h-10 w-auto max-w-36 opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>

        <dl className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((cat) => (
            <div key={cat.title}>
              <dt className="font-display text-lg font-semibold text-ink-950">
                {cat.title}
              </dt>
              <dd className="mt-2 leading-relaxed text-slate-600">
                {cat.brands.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
