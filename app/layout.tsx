import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Branding } from "@/lib/branding";
import { DomainURL } from "@/lib/links";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DomainURL),
  title: `${Branding.Name} – Web Development Services`,
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
    title: `${Branding.Name} – Web Development Services`,
    images: [{ url: Branding.SocialPreviewImage, alt: "A picture reading 'Ravision Tech'" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Branding.Name} – Web Development Services`,
    images: [{ url: Branding.SocialPreviewImage, alt: "A picture reading 'Ravision Tech'" }],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${jetbrainsMono.variable}`}>
      <head />
      <body className="overflow-x-clip bg-surface-body">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-LMLYM4Y2FS" />
    </html>
  );
};

export default RootLayout;
