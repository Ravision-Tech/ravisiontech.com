"use client";

import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
type AsLink = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

type ButtonProps = AsButton | AsLink;

const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const classes = cn(
    "rounded-lg px-8 py-[0.9rem] text-[0.88rem] transition-all duration-200 cursor-pointer select-none",
    variants[variant],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, onClick, ...rest } = props as AsLink;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex !== -1) {
        const targetId = href.substring(hashIndex + 1);
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    return (
      <Link href={href} className={classes} onClick={handleClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
};

export default Button;
