import Link from "next/link";

import HeroWindow from "@/components/hero-window";

const HeroSection = () => {
  return (
    <section className="relative z-[1] mx-auto flex min-h-screen max-w-[1200px] items-center px-12 pt-40 pb-24 max-md:px-6">
      <div className="flex w-full items-center gap-8">
        <div className="flex min-w-0 flex-1 flex-col">
          <h1
            className="animate-fade-up mb-8 text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.98] font-black tracking-[-0.04em]"
            style={{ animationDelay: "0.12s" }}
          >
            We build
            <br />
            sites that
            <br />
            <em className="text-primary not-italic">get results.</em>
          </h1>

          <p
            className="animate-fade-up mb-12 max-w-[460px] text-[1.1rem] leading-[1.75] font-normal text-muted-foreground"
            style={{ animationDelay: "0.22s" }}
          >
            Ravision Tech designs and develops high-performance websites for businesses that refuse to blend in.
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-4" style={{ animationDelay: "0.32s" }}>
            <Link
              href="#contact"
              className="flex flex-row items-center gap-2 rounded-lg bg-primary px-8 py-[0.9rem] text-[0.88rem] font-bold tracking-[0.02em] text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
            >
              Start a Project
            </Link>
            <Link
              href="#services"
              className="inline-block rounded-lg border border-border-bolder px-8 py-[0.9rem] text-[0.88rem] font-semibold text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
            >
              See Services
            </Link>
          </div>
        </div>

        <div className="hidden w-[330px] flex-shrink-0 items-center justify-end min-[835px]:flex lg:w-[440px] xl:w-[500px]">
          <HeroWindow />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
