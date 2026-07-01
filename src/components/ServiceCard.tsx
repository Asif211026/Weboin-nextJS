import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-charcoal-border/15 bg-white/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ember/10 dark:border-clay-50/10 dark:bg-charcoal-light/60">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-gradient text-charcoal transition duration-300 group-hover:scale-105">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink dark:text-clay-50">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-clay-50/65">
        {service.description}
      </p>
    </div>
  );
}
