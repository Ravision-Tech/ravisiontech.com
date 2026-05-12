import Image from "next/image";

import { BrandAssetKey, Branding } from "@/lib/branding";
import { cn } from "@/lib/utils";

export const AssetCard = ({
  asset,
  label,
  sublabel,
  bg = "dark",
  imgClassName,
}: {
  asset: BrandAssetKey;
  label: string;
  sublabel?: string;
  bg?: "dark" | "light";
  imgClassName?: string;
}) => {
  const { src, alt } = Branding.BrandAssets[asset];
  return (
    <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-card">
      <div className={cn("flex items-center justify-center px-10 py-12", bg === "dark" ? "bg-[#131313]" : "bg-white")}>
        <Image
          src={src}
          alt={alt}
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
      </div>
    </div>
  );
};
