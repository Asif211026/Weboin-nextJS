export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-border/20 bg-clay-50 py-8 dark:border-clay-50/10 dark:bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink/55 dark:text-clay-50/50 sm:flex-row">
        <p className="font-display font-semibold text-ink/80 dark:text-clay-50/80">
          KILN
        </p>
        <p>&copy; {year} Kiln Studio. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#services" className="hover:text-ember dark:hover:text-ember-light">
            Services
          </a>
          <a href="#work" className="hover:text-ember dark:hover:text-ember-light">
            Work
          </a>
          <a href="#contact" className="hover:text-ember dark:hover:text-ember-light">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
