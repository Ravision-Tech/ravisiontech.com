import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import ScrollLink from "./scroll-link";

const variants = {
  primary: "bg-primary font-bold tracking-[0.02em] text-primary-foreground hover:scale-105 hover:opacity-85",
  secondary: "border border-border-bolder font-semibold text-muted-foreground hover:border-primary hover:text-primary",
};

type CommonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type AsLink = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof ScrollLink>, "href" | "children">;

type ButtonProps = AsButton | AsLink;

const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const classes = cn(
    "rounded-lg px-8 py-[0.9rem] text-[0.88rem] transition-all duration-200 cursor-pointer select-none",
    variants[variant],
    className
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <ScrollLink className={classes} {...(props as AsLink)}>
        {children}
      </ScrollLink>
    );
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
};

export default Button;
