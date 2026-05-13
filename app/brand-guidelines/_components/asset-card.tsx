"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DownloadIcon } from "lucide-react";

import Button from "@/components/button";
import { BrandAsset } from "@/lib/branding";
import { cn } from "@/lib/utils";

function formatBytes(bytes: number): string {
  const fmt = (n: number) => {
    const s = n.toFixed(1);
    return s.endsWith(".0") ? n.toFixed(0) : s;
  };
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${fmt(bytes / 1024)} KB`;
  return `${fmt(bytes / (1024 * 1024))} MB`;
}

async function fetchSize(url: string): Promise<string | null> {
  try {
    const head = await fetch(url, { method: "HEAD", headers: { "Accept-Encoding": "identity" } });
    const len = head.headers.get("content-length");
    if (len) return formatBytes(parseInt(len, 10));
    const res = await fetch(url);
    const blob = await res.blob();
    return formatBytes(blob.size);
  } catch {
    return null;
  }
}

export const AssetCard = ({
  asset,
  label,
  sublabel,
  bg = "dark",
  imgClassName,
}: {
  asset: BrandAsset;
  label: string;
  sublabel?: string;
  bg?: "dark" | "light";
  imgClassName?: string;
}) => {
  const [sizes, setSizes] = useState<{ svg: string | null; png: string | null }>({ svg: null, png: null });

  useEffect(() => {
    Promise.all([fetchSize(asset.svg), fetchSize(asset.png)]).then(([svg, png]) => setSizes({ svg, png }));
  }, [asset.svg, asset.png]);

  const download = (src: string, ext: string) => {
    const filename = src.split("/").pop() ?? `asset.${ext}`;
    const a = document.createElement("a");
    a.href = src;
    a.download = filename;
    a.click();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-card">
      <div className={cn("flex items-center justify-center px-10 py-12", bg === "dark" ? "bg-[#131313]" : "bg-white")}>
        <Image
          src={asset.svg}
          alt={asset.alt}
          width={0}
          height={0}
          unoptimized
          draggable={false}
          className={cn("h-auto w-full max-w-[260px] select-none", imgClassName)}
        />
      </div>
      <div className="border-t border-border-muted px-5 py-4">
        <p className="text-[0.82rem] font-semibold text-foreground">{label}</p>
        {sublabel && <p className="mt-0.5 font-mono text-[0.72rem] tracking-wide text-muted-foreground">{sublabel}</p>}
        <div className="mt-3 flex gap-2">
          <Button
            onClick={() => download(asset.svg, "svg")}
            variant="secondary"
            className="flex flex-row gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider transition-all duration-200"
          >
            <DownloadIcon className="h-4 w-4" /> SVG{sizes.svg ? ` (${sizes.svg})` : ""}
          </Button>
          <Button
            onClick={() => download(asset.png, "png")}
            variant="secondary"
            className="flex flex-row gap-1.5 rounded-md px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider transition-all duration-200"
          >
            <DownloadIcon className="h-4 w-4" /> PNG{sizes.png ? ` (${sizes.png})` : ""}
          </Button>
        </div>
      </div>
    </div>
  );
};
