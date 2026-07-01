import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal-border/15 dark:border-clay-50/10">
      <Image
        src={project.image}
        alt={`${project.title} — ${project.category} project thumbnail`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
      />

      {/* Base gradient — keeps title legible at rest, not just on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ember-light">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-clay-50">
          {project.title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-clay-50/80 opacity-0 transition-all duration-300 ease-out group-hover:max-h-16 group-hover:opacity-100">
          {project.blurb}
        </p>
      </div>
    </article>
  );
}
