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
    desc: "Fast, modern, and built to scale. We write clean code with the latest tech stack that ages well, because your business shouldn't outgrow its website.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: PaletteIcon,
    name: "Web Design",
    desc: "Pixel-perfect, brand-led designs that earn a second look. Every layout decision is intentional and built for real users, not just aesthetics.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    icon: ShoppingCartIcon,
    name: "E-Commerce",
    desc: "Online stores built to sell. From the first product page to the final confirmation screen, every step is optimized for the one thing that matters: getting people to buy.",
    tags: ["Shopify", "Stripe"],
  },
  {
    icon: ActivityIcon,
    name: "SEO & Performance",
    desc: "If no one can find your site, does it even exist? We bake Core Web Vitals in from day one, so Google finds you before your competition does.",
    tags: ["Core Web Vitals", "On-Page SEO", "Analytics"],
  },
];
