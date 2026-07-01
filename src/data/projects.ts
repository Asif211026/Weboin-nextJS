export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  blurb: string;
};

export const projects: Project[] = [
  {
    id: "ember-co",
    title: "Ember & Co.",
    category: "Brand Identity",
    year: "2025",
    image: "/portfolio/ember-co.jpg",
    blurb: "A full identity system for a specialty coffee roaster, built around warmth and repeat ritual.",
  },
  {
    id: "fieldnote",
    title: "Fieldnote",
    category: "Product Design",
    year: "2025",
    image: "/portfolio/fieldnote.jpg",
    blurb: "A field-research app redesigned around how ecologists actually take notes outdoors.",
  },
  {
    id: "solstice-market",
    title: "Solstice Market",
    category: "Web Development",
    year: "2024",
    image: "/portfolio/solstice-market.jpg",
    blurb: "A marketplace storefront rebuilt on Next.js, cutting load time by more than half.",
  },
  {
    id: "northbound",
    title: "Northbound",
    category: "Brand Identity",
    year: "2024",
    image: "/portfolio/northbound.jpg",
    blurb: "Identity and pitch materials for a logistics startup expanding into three new regions.",
  },
  {
    id: "loam-studio",
    title: "Loam Studio",
    category: "Web Development",
    year: "2023",
    image: "/portfolio/loam-studio.jpg",
    blurb: "A ceramics studio's online shop, designed to feel as tactile as the work it sells.",
  },
  {
    id: "verge-health",
    title: "Verge Health",
    category: "Product Design",
    year: "2023",
    image: "/portfolio/verge-health.jpg",
    blurb: "A calmer patient-intake flow for a telehealth platform, cutting drop-off by a third.",
  },
];
