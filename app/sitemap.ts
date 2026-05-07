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
  ];
};

export default Sitemap;
