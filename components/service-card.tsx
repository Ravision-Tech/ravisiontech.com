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
        "group relative flex h-full flex-col overflow-hidden bg-background p-10 transition-colors duration-[250ms] hover:bg-muted",
        className
      )}
    >
      <div className="pointer-events-none absolute -top-8 -right-8 select-none">
        <ServiceIconComponent className="h-44 w-44 [mask-image:linear-gradient(to_top_right,rgba(0,0,0,0.25)_0%,black_65%)] stroke-2 text-foreground opacity-[0.13] transition-opacity duration-[250ms] group-hover:opacity-[0.2]" />
      </div>

      <div className="font-mono-brand mb-6 text-[0.65rem] tracking-[0.1em] text-dim transition-colors duration-[250ms] select-none group-hover:text-muted-foreground">
        {num.toString().padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
      </div>
      <h3 className="mb-3 text-[1.15rem] font-bold tracking-[-0.01em] text-foreground">{service.name}</h3>
      <p className="text-[0.88rem] leading-[1.72] text-muted-foreground">{service.desc}</p>
      <div className="mt-auto flex flex-wrap gap-[0.45rem] pt-6 select-none">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-brand rounded border border-border px-[0.6rem] py-[0.28rem] text-[0.62rem] tracking-[0.07em] text-dim uppercase transition-colors duration-[250ms] group-hover:border-dim group-hover:text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
