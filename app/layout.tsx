import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
          <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                backgroundPosition: "center center",
              }}
            />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-LMLYM4Y2FS" />
    </html>
  );
};

export default RootLayout;
