"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          "fixed top-0 right-0 left-0 z-[100] flex h-16 items-center justify-between border-b px-12 backdrop-blur-sm transition-all duration-300 max-md:px-6",
          scrolled ? "border-border-scrolled bg-[var(--navbar-bg-scrolled)]" : "border-border bg-[var(--navbar-bg)]"
        )}
      >
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-[10px] text-[1rem] font-black tracking-[0.08em] text-foreground no-underline"
        >
          <MouseTrackedLogo />
          <Image
            src="/branding/wordmarks/ravision-tech-wordmark-long-white.svg"
            alt="The Ravision Tech Logo"
            width={0}
            height={0}
            unoptimized
            priority
            className="hidden h-4 w-full dark:block"
          />
          <Image
            src="/branding/wordmarks/ravision-tech-wordmark-long-black.svg"
            alt="The Ravision Tech Logo"
            width={0}
            height={0}
            unoptimized
            priority
            className="block h-4 w-full dark:hidden"
          />
        </Link>
        <div className="flex list-none items-center gap-8">
          <Link
            href="#services"
            className="hidden text-[0.82rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors duration-200 hover:text-foreground md:block"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hidden text-[0.82rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors duration-200 hover:text-foreground md:block"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="hidden flex-row items-center gap-2 rounded-[6px] bg-primary px-5 py-2 text-[0.78rem] font-bold tracking-[0.04em] text-primary-foreground transition-opacity hover:opacity-85 md:flex"
          >
            Start a Project
          </Link>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="block cursor-pointer rounded-[6px] p-2 text-foreground transition-opacity hover:opacity-85 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={cn(
                  "absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                  mobileOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "fixed top-16 right-0 left-0 z-[99] overflow-hidden md:hidden",
          !mobileOpen && "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "border-b backdrop-blur-[16px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            scrolled ? "border-border-scrolled bg-[var(--navbar-bg-scrolled)]" : "border-border bg-[var(--navbar-bg)]",
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col items-center gap-4 px-6 py-4">
            <Link
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="text-[1.2rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-[1.2rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-primary px-5 py-2.5 text-[1.2rem] font-bold tracking-[0.04em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
