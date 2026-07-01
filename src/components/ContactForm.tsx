"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!values.email.trim()) {
      next.email = "An email address is required.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "That email address doesn't look right.";
    }
    if (!values.message.trim()) next.message = "Add a few words about the project.";
    else if (values.message.trim().length < 10)
      next.message = "A little more detail helps — at least 10 characters.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    // No backend is wired up for this task — simulate the round trip.
    setTimeout(() => {
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    }, 900);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-ember/30 bg-ember/5 p-10 text-center"
      >
        <CheckCircle2 className="text-ember dark:text-ember-light" size={32} />
        <p className="font-display text-lg font-semibold text-ink dark:text-clay-50">
          Message sent.
        </p>
        <p className="text-sm text-ink/65 dark:text-clay-50/65">
          We reply within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-ember underline-offset-4 hover:underline dark:text-ember-light"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-ink dark:text-clay-50"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-xl border border-charcoal-border/25 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember dark:border-clay-50/15 dark:bg-charcoal-light/60 dark:text-clay-50"
          placeholder="Jordan Rivers"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-ember-dark dark:text-ember-light">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-ink dark:text-clay-50"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-xl border border-charcoal-border/25 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember dark:border-clay-50/15 dark:bg-charcoal-light/60 dark:text-clay-50"
          placeholder="jordan@company.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-ember-dark dark:text-ember-light">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink dark:text-clay-50"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-xl border border-charcoal-border/25 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember dark:border-clay-50/15 dark:bg-charcoal-light/60 dark:text-clay-50"
          placeholder="What are you building, and what do you need help with?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-ember-dark dark:text-ember-light">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-ember-gradient px-6 py-3 text-sm font-semibold text-charcoal shadow-md shadow-ember/20 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
