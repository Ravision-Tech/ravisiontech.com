"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const sections = [
  { id: "color-palette", num: "01", label: "Color Palette" },
  { id: "logomark", num: "02", label: "Logomark" },
  { id: "wordmarks", num: "03", label: "Wordmarks" },
  { id: "combinationmarks", num: "04", label: "Combinationmarks" },
  { id: "user-guidance", num: "05", label: "Usage Notes" },
];

export const TableOfContents = () => {
  const [active, setActive] = useState<string | null>(null);
  const manualRef = useRef(false);

  useEffect(() => {
    const lastId = sections[sections.length - 1].id;

    const onScroll = () => {
      if (manualRef.current) return;

      const scrollY = window.scrollY;
      const nearBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActive(lastId);
        return;
      }

      const trigger = scrollY + window.innerHeight * 0.25;
      let current: string | null = null;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + scrollY <= trigger) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="flex flex-col gap-0.5">
      <p className="mb-4 font-mono text-[0.62rem] font-bold tracking-[0.22em] text-muted-foreground uppercase">
        On this page
      </p>
      {sections.map(({ id, num, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => {
              setActive(id);
              manualRef.current = true;
              setTimeout(() => {
                manualRef.current = false;
              }, 1000);
            }}
            className={cn(
              "group flex items-center gap-3 rounded-md py-1.5 text-[0.78rem] transition-colors duration-200",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "h-px shrink-0 transition-all duration-300",
                isActive ? "w-5 bg-primary" : "w-3 bg-border-muted group-hover:w-4 group-hover:bg-muted-foreground"
              )}
            />
            <span className="font-mono text-[0.62rem] opacity-40">{num}</span>
            {label}
          </a>
        );
      })}
    </nav>
  );
};
