import type { MetadataRoute } from "next";

import { Branding } from "@/lib/branding";

export const manifest = (): MetadataRoute.Manifest => {
  return {
    name: Branding.Name,
    short_name: "RavisionTech",
    description: `${Branding.Name} builds high-performance websites that rank in search and keep people staring. Custom web development, design, e-commerce, and SEO.`,
    start_url: "/",
    display: "standalone",
    background_color: "#131313",
    theme_color: "#131313",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
};

export default manifest;
