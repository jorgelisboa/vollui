type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
};

export function SectionHeading({ title, description, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <h2
        className={`font-display text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-[2.75rem] sm:leading-[1.1] ${
          dark ? "text-snow" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            dark ? "text-mist-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
