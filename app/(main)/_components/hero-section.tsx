import Link from "next/link";
import { SparklesIcon } from "lucide-react";

import HeroWindow from "@/components/hero-window";

const HeroSection = () => {
  return (
    <section className="relative z-[1] min-h-screen flex items-center px-12 max-md:px-6 pt-40 pb-24 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex items-center w-full gap-8">
        <div className="flex flex-col flex-1 min-w-0">
          <h1
            className="text-[clamp(3rem,6.5vw,7.5rem)] font-black leading-[0.98] tracking-[-0.04em] mb-8 animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            We build
            <br />
            sites that
            <br />
            <em className="not-italic text-primary">get results.</em>
          </h1>

          <p
            className="text-[1.1rem] text-muted-foreground max-w-[460px] leading-[1.75] mb-12 font-normal animate-fade-up"
            style={{ animationDelay: "0.22s" }}
          >
            Ravision Tech designs and develops high-performance websites for businesses that refuse to blend in.
          </p>

          <div className="flex gap-4 items-center flex-wrap animate-fade-up" style={{ animationDelay: "0.32s" }}>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-[0.9rem] rounded-lg font-bold text-[0.88rem] tracking-[0.02em] hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200 flex flex-row gap-2 items-center"
            >
              <SparklesIcon className="w-4" /> Start a Project
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground px-8 py-[0.9rem] rounded-lg font-semibold text-[0.88rem] border border-border-bolder hover:border-primary hover:text-primary transition-all duration-200 inline-block"
            >
              See Services
            </Link>
          </div>
        </div>

        <div className="hidden min-[835px]:flex items-center justify-end flex-shrink-0 w-[330px] lg:w-[440px] xl:w-[500px]">
          <HeroWindow />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
