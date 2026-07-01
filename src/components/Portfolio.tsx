import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-white/40 py-20 dark:bg-charcoal-light/40 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember dark:text-ember-light">
            Portfolio
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink dark:text-clay-50 md:text-4xl">
            Six pieces, three disciplines
          </h2>
          <p className="mt-4 text-ink/65 dark:text-clay-50/65">
            A short list from the last two years — identity, product, and
            web work for founders across a few different industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
