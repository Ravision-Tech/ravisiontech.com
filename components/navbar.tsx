"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, SparklesIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import MouseTrackedLogo from "./mouse-tracked-logo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  return (
    <div ref={navRef}>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 max-md:px-6 h-16 backdrop-blur-[16px] border-b transition-all duration-300",
          scrolled ? "bg-[var(--navbar-bg-scrolled)] border-border-scrolled" : "bg-[var(--navbar-bg)] border-border"
        )}
      >
        <Link
          href="#"
          className="font-black text-[1rem] tracking-[0.08em] text-foreground flex items-center gap-[10px] no-underline"
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
            className="text-muted-foreground hidden md:block text-[0.82rem] font-medium tracking-[0.02em] hover:text-foreground transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hidden md:block text-[0.82rem] font-medium tracking-[0.02em] hover:text-foreground transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="bg-primary hidden md:flex flex-row gap-2 items-center text-primary-foreground px-5 py-2 rounded-[6px] font-bold text-[0.78rem] tracking-[0.04em] hover:opacity-85 transition-opacity"
          >
            <SparklesIcon className="w-4 h-4" />
            Start a Project
          </Link>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-foreground block md:hidden px-2 py-2 rounded-[6px] font-bold text-[0.78rem] tracking-[0.04em] hover:opacity-85 transition-opacity cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-[99] md:hidden backdrop-blur-[16px] border-b transition-all duration-300 overflow-hidden",
          scrolled ? "bg-[var(--navbar-bg-scrolled)] border-border-scrolled" : "bg-[var(--navbar-bg)] border-border",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <Link
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="text-muted-foreground text-[0.9rem] font-medium tracking-[0.02em] hover:text-foreground transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-muted-foreground text-[0.9rem] font-medium tracking-[0.02em] hover:text-foreground transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-primary flex flex-row gap-2 items-center justify-center text-primary-foreground px-5 py-2.5 rounded-[6px] font-bold text-[0.82rem] tracking-[0.04em] hover:opacity-85 transition-opacity"
          >
            <SparklesIcon className="w-4 h-4" />
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
