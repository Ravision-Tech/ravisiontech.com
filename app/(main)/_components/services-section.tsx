import SectionLabel from "@/components/section-label";
import ServiceCard from "@/components/service-card";
import { SERVICES } from "@/lib/services";

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-[1] mx-auto max-w-[1200px] px-12 py-28 max-md:px-6 max-md:py-20">
      <SectionLabel label="What We Do" />

      <div className="mb-14 grid grid-cols-2 items-end gap-4 max-md:grid-cols-1">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.025em]">
          Everything your online presence needs.
        </h2>
        <p className="text-muted-foreground max-w-[340px] self-end text-[0.95rem] leading-[1.75]">
          From concept to launch, we handle the full stack, so you can focus on running your business.
        </p>
      </div>

      <div className="bg-border border-border grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border max-md:grid-cols-1">
        {SERVICES.map((service, i) => (
          <ServiceCard key={i + 1} num={i + 1} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
