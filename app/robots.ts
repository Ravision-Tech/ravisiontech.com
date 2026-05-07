import type { MetadataRoute } from "next";

import { DomainURL } from "@/lib/links";

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DomainURL}/sitemap.xml`,
  };
};

export default Robots;
