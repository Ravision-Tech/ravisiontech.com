import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FooterIconLinkProps = {
  linkName: string;
  link: string;
  icon: LucideIcon;
  iconClassName?: string;
};

const FooterIconLink = ({ linkName, link, icon, iconClassName }: FooterIconLinkProps) => {
  const IconComponent = icon as LucideIcon;

  return (
    <Link
      href={link}
      target="_blank"
      aria-label={linkName}
      className="text-dim transition-colors duration-200 hover:text-primary"
    >
      <IconComponent className={cn("h-4 w-4", iconClassName)} />
    </Link>
  );
};

export default FooterIconLink;
