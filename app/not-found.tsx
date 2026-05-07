"use client";

import Link from "next/link";

import Footer from "@/components/footer";
import MouseTrackedLogo from "@/components/mouse-tracked-logo";
import Navbar from "@/components/navbar";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

const NotFound = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex h-screen flex-col overflow-x-hidden bg-background text-foreground">
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

      <section className="relative z-[1] mx-auto flex max-w-[1200px] flex-1 items-center px-12 pt-16 pb-8 max-md:px-6">
        <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
          <MouseTrackedLogo size={isMobile ? 120 : 160} />

          <div className="mt-4 flex flex-col items-center gap-3">
            <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.95] font-black tracking-[-0.04em] text-foreground">
              404
            </h1>
            <p className="mt-2 max-w-[380px] text-[1rem] leading-[1.75] text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-primary px-8 py-[0.9rem] text-[0.88rem] font-bold tracking-[0.02em] text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
            >
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border border-border-bolder px-8 py-[0.9rem] text-[0.88rem] font-semibold text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
