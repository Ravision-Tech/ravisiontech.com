import SectionLabel from "@/components/section-label";
import ServiceCard from "@/components/service-card";
import { SERVICES } from "@/lib/services";

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-[1] max-w-[1200px] mx-auto px-12 max-md:px-6 py-28 max-md:py-20">
      <SectionLabel label="What We Do" />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 items-end mb-14">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.025em] leading-[1.08]">
          Everything your online presence needs.
        </h2>
        <p className="text-muted-foreground text-[0.95rem] leading-[1.75] max-w-[340px] self-end">
          From concept to launch, we handle the full stack — so you can focus on running your business.
        </p>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-border border border-border rounded-[14px] overflow-hidden">
        {SERVICES.map((service, i) => (
          <ServiceCard key={i + 1} num={i + 1} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
