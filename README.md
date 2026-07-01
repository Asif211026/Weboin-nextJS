# Kiln — Design Agency Homepage

A homepage for a fictional brand & product design studio, **Kiln**, built for the
Next.js Developer Internship task. Live sections: Hero, Services, Portfolio, Contact.

> **Concept:** a kiln fires raw clay into something that holds its shape — the same
> way a studio takes a raw idea and fires it into a brand. That metaphor drives the
> copy, the palette ("Raw" = light mode, "Fired" = dark mode), and the signature
> gauge illustration in the hero.

## Tech stack

- **Next.js 14** (App Router, functional components only)
- **TypeScript**
- **Tailwind CSS** (custom design tokens — see `tailwind.config.ts`)
- **lucide-react** for icons
- **next-themes** for the light/dark ("Raw" / "Fired") toggle
- **next/image** for optimized, responsive images
- Placeholder portfolio artwork generated locally with Python/Pillow (see
  `scripts/generate_art.py`) — abstract gradient "glaze" images instead of stock
  photos, so there are no licensing questions.

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

No environment variables or backend are required — the contact form validates
client-side and simulates a submission (see "Assumptions" below).

## Project structure

```
src/
  app/
    layout.tsx      # root layout, SEO metadata, theme provider, nav/footer
    page.tsx         # assembles the four sections
    globals.css      # Tailwind layers, focus states, reduced-motion, grain texture
  components/
    Navbar.tsx        Hero.tsx         HeroGauge.tsx   (signature SVG dial)
    Services.tsx      ServiceCard.tsx
    Portfolio.tsx      ProjectCard.tsx
    Contact.tsx        ContactForm.tsx (client component — validation + state)
    Footer.tsx         ThemeToggle.tsx  ThemeProvider.tsx
  data/
    services.ts       projects.ts       # content kept out of the components
public/
  portfolio/*.jpg      # generated placeholder artwork
  og-image.jpg          # social share image
scripts/
  generate_art.py       # regenerate the placeholder artwork if you want new colors
```

Each section is its own component, each card is its own sub-component
(`ServiceCard`, `ProjectCard`), and copy/content lives in `src/data` rather than
inline in JSX, so content can change without touching layout code.

## Feature checklist against the brief

- [x] Hero: agency name, tagline, two CTAs, animated gradient + signature gauge illustration
- [x] Services: 4 cards, icon + title + description
- [x] Portfolio: 6 projects in a responsive grid, image + title always visible, hover reveal for more detail
- [x] Contact: name / email / message fields, submit button, client-side validation, success message
- [x] Next.js 13+ (using 14), App Router, functional components only
- [x] Separate component per section, responsive from mobile up
- **Bonus:** Tailwind CSS, scroll/hover animations (motion respects `prefers-reduced-motion`), SEO metadata (title template, OpenGraph, Twitter card, theme-color), dark mode toggle, `next/image` optimization

## Assumptions & notes

- This is a fictional agency (**Kiln**) with original copy, not a real client — content
  was written for the brief rather than left as Lorem Ipsum, per the "no heavy
  templates" instruction.
- The contact form has no backend. On submit it validates fields, then simulates
  a network round trip (`setTimeout`) before showing a success state. Wiring it to
  a real endpoint (Resend, an API route, a form service) would be a small,
  isolated change to `ContactForm.tsx`.
- Portfolio images are generative placeholder art (gradients), not real client
  work or stock photography, to avoid any licensing ambiguity in a public repo.
- Color/type choices are documented as CSS custom tokens in `tailwind.config.ts`
  (`charcoal`, `clay`, `ember`, `ink`) rather than one-off hex values in components.

## Deployment

Push this repo to GitHub, then import it on [Vercel](https://weboin-next-js.vercel.app/) —
no configuration needed, it's a standard Next.js app.
