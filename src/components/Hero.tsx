import HeroGauge from "./HeroGauge";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-clay-50 dark:bg-charcoal"
    >
      <div className="absolute inset-0 bg-ember-radial dark:opacity-100" />
      <div className="grain" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.35fr_1fr] lg:py-32">
        <div className="animate-fade-up">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ember dark:text-ember-light">
            Kiln — Brand &amp; Product Design Studio
          </p>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-clay-50 sm:text-5xl md:text-6xl">
            We fire raw ideas into brands that hold their shape.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ink/70 dark:text-clay-50/70 md:text-lg">
            Kiln is a small studio for founders who need identity, product,
            and web work done with the same steady hand — from first sketch
            to shipped brand.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ember-gradient px-6 py-3 text-sm font-semibold text-charcoal shadow-md shadow-ember/20 transition hover:brightness-105"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ember hover:text-ember dark:border-clay-50/25 dark:text-clay-50 dark:hover:text-ember-light"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroGauge />
        </div>
      </div>
    </section>
  );
}
