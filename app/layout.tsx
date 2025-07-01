import type { Metadata } from "next";

import "./globals.css";

import { Branding } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

export const metadata: Metadata = {
  metadataBase: new URL(DomainURL),
  title: Branding.Name,
  description: `The official website for ${Branding.Name}.`,
  icons: {
    icon: [
      {
        url: Branding.Logomark,
        href: Branding.Logomark,
      },
    ],
  },
  openGraph: {
    type: "website",
    url: DomainURL,
    title: Branding.Name,
    images: [{ url: "/meta-images/ravisiontech-com.png", alt: "A picture reading 'Ravision Tech'" }],
  },
  twitter: {
    card: "summary_large_image",
    title: Branding.Name,
    images: [{ url: "/meta-images/ravisiontech-com.png", alt: "A picture reading 'Ravision Tech'" }],
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
    </html>
  );
}
