import { Mail, Clock3, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const DETAILS = [
  { icon: Mail, label: "studio@kiln.design" },
  { icon: Clock3, label: "Replies within two working days" },
  { icon: MapPin, label: "Remote-first, working across time zones" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-clay-50 py-20 dark:bg-charcoal md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember dark:text-ember-light">
            Contact
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink dark:text-clay-50 md:text-4xl">
            Start a project
          </h2>
          <p className="mt-4 max-w-md text-ink/65 dark:text-clay-50/65">
            Tell us what you&apos;re building. A few lines is enough to start
            — we&apos;ll follow up with questions.
          </p>

          <ul className="mt-8 space-y-4">
            {DETAILS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-ink/70 dark:text-clay-50/70"
              >
                <Icon size={16} className="text-ember dark:text-ember-light" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-charcoal-border/15 bg-white/60 p-6 shadow-sm dark:border-clay-50/10 dark:bg-charcoal-light/50 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
