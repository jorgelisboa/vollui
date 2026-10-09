import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/site";

export function Method() {
  return (
    <section id="metodo" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Do diagnóstico à instalação, em três etapas" />

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink-950 pt-6">
              <h3 className="font-display text-2xl font-semibold text-ink-950">
                <span aria-hidden className="mr-3 tabular-nums text-brand-700">
                  {i + 1}
                </span>
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
