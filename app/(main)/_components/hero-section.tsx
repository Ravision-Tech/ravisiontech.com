import Link from "next/link";

import SectionLabel from "@/components/section-label";

const HeroSection = () => {
  return (
    <section className="relative z-[1] min-h-screen flex flex-col justify-center px-12 max-md:px-6 pt-40 pb-24 max-w-[1200px] mx-auto">
      <SectionLabel label="Web Development Studio" />

      <h1
        className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.98] tracking-[-0.04em] mb-8 max-w-[920px] animate-fade-up"
        style={{ animationDelay: "0.12s" }}
      >
        We build
        <br />
        sites that
        <br />
        <em className="not-italic text-[#6FC0CA]">get results.</em>
      </h1>

      <p
        className="text-[1.1rem] text-[#7a7a7a] max-w-[460px] leading-[1.75] mb-12 font-normal animate-fade-up"
        style={{ animationDelay: "0.22s" }}
      >
        Ravision Tech designs and develops high-performance websites for businesses that refuse to blend in.
      </p>

      <div className="flex gap-4 items-center flex-wrap animate-fade-up" style={{ animationDelay: "0.32s" }}>
        <Link
          href="#contact"
          className="bg-[#6FC0CA] text-[#0a0a0a] px-8 py-[0.9rem] rounded-lg font-bold text-[0.88rem] tracking-[0.02em] hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200 inline-block"
        >
          Start a Project →
        </Link>
        <Link
          href="#services"
          className="text-[#7a7a7a] px-8 py-[0.9rem] rounded-lg font-semibold text-[0.88rem] border border-[#333] hover:border-[#6FC0CA] hover:text-[#6FC0CA] transition-all duration-200 inline-block"
        >
          See Services
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
