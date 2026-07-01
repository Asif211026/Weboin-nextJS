import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-clay-50 py-20 dark:bg-charcoal md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember dark:text-ember-light">
            Services
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink dark:text-clay-50 md:text-4xl">
            Four ways we shape a brand
          </h2>
          <p className="mt-4 text-ink/65 dark:text-clay-50/65">
            Pick one, or bring us in before you know exactly what you need —
            figuring that part out is part of the work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
