"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CirclePlusIcon, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import MouseTrackedLogo from "./mouse-tracked-logo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 max-md:px-6 h-16 backdrop-blur-[16px] border-b transition-all duration-300",
        scrolled ? "bg-[rgba(15,15,15,0.96)] border-[#2e2e2e]" : "bg-[rgba(15,15,15,0.88)] border-[#222]"
      )}
    >
      <Link
        href="#"
        className="font-black text-[1rem] tracking-[0.08em] text-[#f5f5f5] flex items-center gap-[10px] no-underline"
      >
        <MouseTrackedLogo />
        <Image
          src="/branding/wordmarks/ravision-tech-wordmark-long.svg"
          alt="The Ravision Tech Logo"
          width={0}
          height={0}
          unoptimized
          priority
          className="h-4 w-full"
        />
      </Link>
      <div className="flex items-center gap-8 list-none">
        <Link
          href="#services"
          className="text-[#7a7a7a] hidden md:block text-[0.82rem] font-medium tracking-[0.02em] hover:text-[#f5f5f5] transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href="#contact"
          className="text-[#7a7a7a] hidden md:block text-[0.82rem] font-medium tracking-[0.02em] hover:text-[#f5f5f5] transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          href="#contact"
          className="bg-[#6FC0CA] hidden md:flex flex-row gap-2 items-center text-[#0a0a0a] px-5 py-2 rounded-[6px] font-bold text-[0.78rem] tracking-[0.04em] hover:opacity-85 transition-opacity"
        >
          <CirclePlusIcon className="w-4 h-4" />
          Start a Project
        </Link>
        <div className="text-white block md:hidden px-2 py-2 rounded-[6px] font-bold text-[0.78rem] tracking-[0.04em] hover:opacity-85 transition-opacity cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
