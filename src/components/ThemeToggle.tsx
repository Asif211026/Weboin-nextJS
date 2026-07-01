"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Flame, Droplets } from "lucide-react";

/**
 * Dark mode toggle themed as "Raw" (unfired clay — light) vs "Fired" (kiln dark).
 * This keeps the toggle on-brand instead of a generic sun/moon switch.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isFired = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isFired ? "light" : "dark")}
      aria-label={`Switch to ${isFired ? "Raw (light)" : "Fired (dark)"} mode`}
      className="group flex items-center gap-2 rounded-full border border-charcoal-border/40 dark:border-clay-50/15 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-ink/70 dark:text-clay-50/70 transition hover:border-ember/60 hover:text-ember dark:hover:text-ember-light"
    >
      {!mounted ? (
        <span className="w-14 text-center">···</span>
      ) : (
        <>
          {isFired ? <Flame size={14} /> : <Droplets size={14} />}
          <span>{isFired ? "Fired" : "Raw"}</span>
        </>
      )}
    </button>
  );
}
