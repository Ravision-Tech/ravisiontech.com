import type { Metadata } from "next";

import { Branding } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

export const metadata: Metadata = {
  title: `${Branding.Name} – Brand Guidelines"`,
  description: `${Branding.Name}  brand guidelines including official logos, colors, and usage rules for our visual identity.`,
  openGraph: {
    type: "website",
    url: `${DomainURL}/brand-guidelines`,
    siteName: Branding.Name,
    title: `${Branding.Name} – Brand Guidelines`,
    images: [
      {
        url: "/branding/meta-images/brand-guidelines-social-preview-image.png",
        alt: `${Branding.Name} – Brand Guidelines`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Branding.Name} – Brand Guidelines`,
    images: [
      {
        url: "/branding/meta-images/brand-guidelines-social-preview-image.png",
        alt: `${Branding.Name} – Brand Guidelines`,
      },
    ],
  },
};

const BrandGuidelinesLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default BrandGuidelinesLayout;
