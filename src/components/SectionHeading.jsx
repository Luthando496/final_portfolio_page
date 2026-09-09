export default function SectionHeading({ step, label, title, sub }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
        <span className="h-1 w-1 rounded-full bg-accent" />
        <span className="text-soft">{step}</span>
        <span className="text-soft/60">/</span>
        {label}
      </span>
      <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.08]">
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{sub}</p>}
    </div>
  );
}
