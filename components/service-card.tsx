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
    <div className={cn("bg-[#0f0f0f] p-10 hover:bg-[#1a1a1a] transition-colors duration-[250ms] relative", className)}>
      <div className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.1em] mb-6">
        {num.toString().padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
      </div>
      <div className="w-[42px] h-[42px] bg-[rgba(111,192,202,0.12)] rounded-[10px] flex items-center justify-center mb-6">
        <ServiceIconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-[1.15rem] font-bold mb-3 tracking-[-0.01em] text-[#f5f5f5]">{service.name}</h3>
      <p className="text-[#7a7a7a] text-[0.88rem] leading-[1.72]">{service.desc}</p>
      <div className="flex flex-wrap gap-[0.45rem] mt-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-brand text-[0.62rem] tracking-[0.07em] text-[#3d3d3d] border border-[#222] px-[0.6rem] py-[0.28rem] rounded uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
