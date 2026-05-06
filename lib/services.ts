import { ActivityIcon, Code2Icon, LucideIcon, PaletteIcon, ShoppingCartIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  name: string;
  desc: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Code2Icon,
    name: "Web Development",
    desc: "Fast, modern, scalable applications built with the latest stack. Clean code that's built to last and easy to grow as your business evolves.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: PaletteIcon,
    name: "Web Design",
    desc: "Pixel-perfect, brand-led designs that stand out and convert. Every layout decision is intentional and built for real users, not just aesthetics.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    icon: ShoppingCartIcon,
    name: "E-Commerce",
    desc: "Online stores built to convert. From product pages to checkout flows, we optimize every step of the buying journey for maximum revenue.",
    tags: ["Shopify", "Stripe"],
  },
  {
    icon: ActivityIcon,
    name: "SEO & Performance",
    desc: "Sites that Google loves and users stay on. We build with Core Web Vitals in mind from day one and never as an afterthought.",
    tags: ["Core Web Vitals", "On-Page SEO", "Analytics"],
  },
];
