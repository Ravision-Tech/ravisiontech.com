import { LucideIcon } from "lucide-react";

import { Service, SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  num: number;
  className?: string;
}

const ServiceCard = ({ service, num, className }: ServiceCardProps) => {
  const ServiceIconComponent = service.icon as LucideIcon;

  return (
    <div className={cn("bg-background p-10 hover:bg-muted transition-colors duration-[250ms] relative", className)}>
      <div className="font-mono-brand text-[0.65rem] text-dim tracking-[0.1em] mb-6">
        {num.toString().padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
      </div>
      <div className="w-[42px] h-[42px] bg-[var(--brand-glow-md)] rounded-[10px] flex items-center justify-center mb-6">
        <ServiceIconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-[1.15rem] font-bold mb-3 tracking-[-0.01em] text-foreground">{service.name}</h3>
      <p className="text-muted-foreground text-[0.88rem] leading-[1.72]">{service.desc}</p>
      <div className="flex flex-wrap gap-[0.45rem] mt-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-brand text-[0.62rem] tracking-[0.07em] text-dim border border-border px-[0.6rem] py-[0.28rem] rounded uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
