import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import { Branding } from "@/lib/branding";
import { DomainURL } from "@/lib/links";
import { StructuredData } from "@/lib/seo";

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
  title: `${Branding.Name} – Web Development Studio`,
  description: `${Branding.Name} builds high-performance websites that rank in search and keep people looking. Custom web development, design, e-commerce, and SEO.`,
  icons: {
    icon: [
      {
        url: Branding.BrandAssets.logomarks.logomark.svg,
        href: Branding.BrandAssets.logomarks.logomark.svg,
      },
    ],
  },
  openGraph: {
    type: "website",
    url: DomainURL,
    siteName: Branding.Name,
    title: `${Branding.Name} – Web Development Studio`,
    images: [
      {
        url: Branding.SocialPreviewImage,
        alt: `${Branding.Name} – We build sites worth staring at.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Branding.Name} – Web Development Studio`,
    images: [
      {
        url: Branding.SocialPreviewImage,
        alt: `${Branding.Name} – We build sites worth staring at.`,
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="RavisionTech" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
      </head>
      <body className="overflow-x-clip bg-surface-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(StructuredData.JsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:64px_64px] bg-center"
            />
            <Navbar />
            <main className="flex flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-LMLYM4Y2FS" />
    </html>
  );
};

export default RootLayout;
