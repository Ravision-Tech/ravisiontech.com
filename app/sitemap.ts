import type { MetadataRoute } from "next";

import { DomainURL } from "@/lib/links";

const Sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: DomainURL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DomainURL}/brand-guidelines`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
};

export default Sitemap;
