"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const subscribe = () => () => {};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!mounted) return <div className="h-7 w-14 rounded-full" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex cursor-pointer items-center rounded-full border border-border p-0.5 transition-colors duration-200 hover:border-primary"
    >
      <div
        className={cn(
          "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-surface-elevated transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          !isDark && "translate-x-6"
        )}
      />
      <div
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center transition-colors duration-200",
          isDark ? "text-foreground" : "text-dim"
        )}
      >
        <MoonIcon className="h-3.5 w-3.5" />
      </div>
      <div
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center transition-colors duration-200",
          !isDark ? "text-foreground" : "text-dim"
        )}
      >
        <SunIcon className="h-3.5 w-3.5" />
      </div>
    </button>
  );
};

export default ThemeToggle;
