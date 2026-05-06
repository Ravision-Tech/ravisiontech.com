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
    <div
      className={cn(
        "group bg-background hover:bg-muted relative flex h-full flex-col p-10 transition-colors duration-[250ms]",
        className
      )}
    >
      <div className="font-mono-brand text-dim group-hover:text-muted-foreground mb-6 text-[0.65rem] tracking-[0.1em] transition-colors duration-[250ms] select-none">
        {num.toString().padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
      </div>
      <div className="mb-6 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[var(--brand-glow-md)]">
        <ServiceIconComponent className="h-5 w-5" />
      </div>
      <h3 className="text-foreground mb-3 text-[1.15rem] font-bold tracking-[-0.01em]">{service.name}</h3>
      <p className="text-muted-foreground text-[0.88rem] leading-[1.72]">{service.desc}</p>
      <div className="mt-auto flex flex-wrap gap-[0.45rem] pt-6 select-none">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-brand text-dim group-hover:text-muted-foreground border-border group-hover:border-dim rounded border px-[0.6rem] py-[0.28rem] text-[0.62rem] tracking-[0.07em] uppercase transition-colors duration-[250ms]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
