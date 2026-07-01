"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-border/30 bg-clay-50/90 backdrop-blur-md dark:border-clay-50/10 dark:bg-charcoal/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-ink dark:text-clay-50"
        >
          KILN
          <span className="ml-2 hidden font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-clay dark:text-clay-50/50 sm:inline">
            Design Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition hover:text-ember dark:text-clay-50/70 dark:hover:text-ember-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-ember-gradient px-4 py-2 text-sm font-semibold text-charcoal shadow-sm transition hover:brightness-105"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal-border/30 bg-clay-50 px-6 py-4 dark:border-clay-50/10 dark:bg-charcoal md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink/80 dark:text-clay-50/80"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-ember-gradient px-4 py-2 text-sm font-semibold text-charcoal"
              >
                Start a Project
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
