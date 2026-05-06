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
    <div className="relative flex items-center rounded-full border border-border p-0.5">
      <div
        className={cn(
          "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-surface-elevated transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          !isDark && "translate-x-6"
        )}
      />
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "relative z-10 flex h-6 w-6 cursor-pointer items-center justify-center text-dim transition-colors duration-200 hover:text-foreground",
          isDark && "text-foreground"
        )}
        aria-label="Dark mode"
      >
        <MoonIcon className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "relative z-10 flex h-6 w-6 cursor-pointer items-center justify-center text-dim transition-colors duration-200 hover:text-foreground",
          !isDark && "text-foreground"
        )}
        aria-label="Light mode"
      >
        <SunIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
