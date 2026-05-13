import { useState } from "react";

import Button from "@/components/button";
import { cn } from "@/lib/utils";

export const ColorSwatch = ({ name, hex }: { name: string; hex: string; textClass: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-card">
      <div className="h-28 w-full" style={{ backgroundColor: hex }} />
      <div className="flex flex-col gap-1 p-4">
        <span className="text-[0.82rem] font-semibold tracking-[0.02em] text-foreground">{name}</span>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[0.78rem] tracking-wider text-muted-foreground">{hex}</span>
          <Button
            onClick={copy}
            variant="secondary"
            className={cn(
              "rounded-md px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider transition-all duration-200",
              copied
                ? "bg-primary/20 text-primary"
                : "bg-surface-elevated text-muted-foreground hover:bg-surface-elevated/80 hover:text-foreground"
            )}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </div>
  );
};
