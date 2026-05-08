"use client";

import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type ScrollLinkProps = ComponentPropsWithoutRef<typeof Link>;

const ScrollLink = ({ href, onClick, children, ...props }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    const hrefString = href.toString();
    const hashIndex = hrefString.indexOf("#");

    if (hashIndex !== -1) {
      const targetId = hrefString.substring(hashIndex + 1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;
