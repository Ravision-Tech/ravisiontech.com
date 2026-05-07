import Button from "@/components/button";
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
            sites worth
            <br />
            <em className="text-primary not-italic">staring at.</em>
          </h1>

          <p
            className="animate-fade-up mb-12 max-w-[460px] text-[1.1rem] leading-[1.75] font-normal text-muted-foreground"
            style={{ animationDelay: "0.22s" }}
          >
            Most websites disappear into the digital noise. We build high-performance sites that stop the scroll, rank
            in search, and give people a reason to stay.
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-4" style={{ animationDelay: "0.32s" }}>
            <Button href="#contact" className="max-sm:scale-105">
              Get in Touch
            </Button>
            <Button href="#services" variant="secondary">
              See Services
            </Button>
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
