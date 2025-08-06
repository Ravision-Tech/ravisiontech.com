import type { Metadata } from "next";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Branding } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

export const metadata: Metadata = {
  metadataBase: new URL(DomainURL),
  title: Branding.Name,
  description: `The official website for ${Branding.Name}.`,
  icons: {
    icon: [
      {
        url: Branding.Logos.Logomark,
        href: Branding.Logos.Logomark,
      },
    ],
  },
  openGraph: {
    type: "website",
    url: DomainURL,
    title: Branding.Name,
    images: [{ url: Branding.SocialPreviewImage, alt: "A picture reading 'Ravision Tech'" }],
  },
  twitter: {
    card: "summary_large_image",
    title: Branding.Name,
    images: [{ url: Branding.SocialPreviewImage, alt: "A picture reading 'Ravision Tech'" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[#131313] overflow-x-clip">{children}</body>
      <GoogleAnalytics gaId="G-LMLYM4Y2FS" />
    </html>
  );
}
