import type { NextConfig } from "next";

import { GitHubURL, InstagramURL, LinkedInURL, YouTubeURL } from "./lib/links";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: LinkedInURL,
        permanent: true,
      },
      {
        source: "/github",
        destination: GitHubURL,
        permanent: true,
      },
      {
        source: "/youtube",
        destination: YouTubeURL,
        permanent: true,
      },
      {
        source: "/instagram",
        destination: InstagramURL,
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: ["10.5.0.2"],
};

export default nextConfig;
