import type { LucideIcon } from "lucide-react";
import { Palette, MonitorSmartphone, Code2, Megaphone } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Logo systems, type, color, and voice — the raw material that holds a company's shape across every surface it touches.",
    icon: Palette,
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "Interfaces people actually enjoy using, shaped through research and iteration from first sketch to shipped screen.",
    icon: MonitorSmartphone,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Fast, accessible sites and apps built on Next.js — tuned for real-world performance, not just a Lighthouse score.",
    icon: Code2,
  },
  {
    id: "launch-marketing",
    title: "Launch & Marketing",
    description:
      "Campaign assets, landing pages, and messaging that carry a brand from unveiling through its first year of growth.",
    icon: Megaphone,
  },
];
