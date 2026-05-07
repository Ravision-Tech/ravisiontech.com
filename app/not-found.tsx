"use client";

import Button from "@/components/button";
import MouseTrackedLogo from "@/components/mouse-tracked-logo";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

const NotFound = () => {
  const isMobile = useIsMobile();
  return (
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
          <Button href="/">Back to Home</Button>
          <Button href="/#contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
