"use client";

import { Branding } from "@/lib/branding";
import { cn } from "@/lib/utils";
import { AssetCard } from "./_components/asset-card";
import { ColorSwatch } from "./_components/color-swatch";
import { SectionDivider } from "./_components/section-divider";

const BrandGuidelinesPage = () => {
  return (
    <main className="relative z-[1] w-full">
      <div className="mx-auto max-w-[1200px] px-12 pb-24 max-md:px-6">
        <section className="pt-36 pb-20">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[0.7rem] font-bold tracking-[0.28em] text-primary uppercase">
              Ravision Tech
            </span>
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] font-black tracking-[-0.04em] text-foreground">
              Brand Guidelines
            </h1>
            <p className="mt-3 max-w-[560px] text-[1rem] leading-[1.8] text-muted-foreground">
              A reference for our visual identity including colors, logomarks, wordmarks, and combinationmarks. Use
              these assets consistently to represent Ravision Tech across all touchpoints.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-20">
          <section id="color-palette">
            <SectionDivider label="01 · Color Palette" />
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Primary Colors</h2>
                <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                  The five colors that define the Ravision Tech brand. Light Blue is our primary accent.
                </p>
              </div>
              <div className="grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2">
                {Branding.BrandColors.map((color) => (
                  <ColorSwatch key={color.hex} {...color} />
                ))}
              </div>
            </div>
          </section>

          <section id="logomark">
            <SectionDivider label="02 · Logomark" />
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Logo Icon</h2>
                <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                  The standalone logomark. Use on dark or brand-colored backgrounds for best contrast.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <AssetCard
                  asset="logomark"
                  label="Logomark"
                  sublabel="SVG · For dark backgrounds"
                  bg="dark"
                  imgClassName="max-w-[100px]"
                />
                <AssetCard
                  asset="logomark"
                  label="Logomark on Brand Color"
                  sublabel="SVG · For brand-colored backgrounds"
                  bg="dark"
                  imgClassName="max-w-[100px]"
                />
              </div>
            </div>
          </section>

          <section className="wordmarks">
            <SectionDivider label="03 · Wordmarks" />
            <div className="mt-8 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Wordmark</h2>
                  <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                    The compact wordmark. Use for contexts where horizontal space is limited.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <AssetCard
                    asset="wordmark-white"
                    label="Wordmark (White)"
                    sublabel="SVG · For dark backgrounds"
                    bg="dark"
                  />
                  <AssetCard
                    asset="wordmark-black"
                    label="Wordmark (Dark)"
                    sublabel="SVG · For light backgrounds"
                    bg="light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Wordmark (Long)</h2>
                  <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                    The extended wordmark spelling out the full brand name. Preferred for headers and wide layouts.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <AssetCard
                    asset="wordmark-long-white"
                    label="Long Wordmark (White)"
                    sublabel="SVG · For dark backgrounds"
                    bg="dark"
                  />
                  <AssetCard
                    asset="wordmark-long-black"
                    label="Long Wordmark (Black)"
                    sublabel="SVG · For light backgrounds"
                    bg="light"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="combinationmarks">
            <SectionDivider label="04 · Combinationmarks" />
            <div className="mt-8 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Combinationmark</h2>
                  <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                    The full lockup including the logomark and wordmark together. Preferred for primary brand
                    applications like headers, presentations, and marketing materials.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <AssetCard
                    asset="combinationmark-white"
                    label="Combinationmark (White)"
                    sublabel="SVG · For dark backgrounds"
                    bg="dark"
                  />
                  <AssetCard
                    asset="combinationmark-black"
                    label="Combinationmark (Black)"
                    sublabel="SVG · For light backgrounds"
                    bg="light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">Combinationmark (Long)</h2>
                  <p className="mt-1.5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                    The extended combinationmark. Preferred for headers and wide layouts.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <AssetCard
                    asset="combinationmark-long-white"
                    label="Long Combinationmark (White)"
                    sublabel="SVG · For dark backgrounds"
                    bg="dark"
                  />
                  <AssetCard
                    asset="combinationmark-long-black"
                    label="Long Combinationmark (Black)"
                    sublabel="SVG · For light backgrounds"
                    bg="light"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="user-guidance">
            <SectionDivider label="05 · Usage Notes" />
            <div className="mt-8 grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {[
                {
                  title: "Do",
                  items: [
                    "Use the light/white version on dark or brand-colored backgrounds",
                    "Use the dark/black version on white or light backgrounds",
                    "Maintain clear space equal to the logomark height around all marks",
                    "Scale proportionally and never stretch or squish",
                  ],
                  accent: "border-primary/40 bg-primary/5",
                  labelColor: "text-primary",
                },
                {
                  title: "Don't",
                  items: [
                    "Don't place black marks on dark backgrounds or light marks on white",
                    "Don't rotate, skew, or add effects to brand marks",
                    "Don't use low-resolution versions where SVGs are available",
                    "Don't recreate or alter the logomark geometry",
                  ],
                  accent: "border-destructive/30 bg-destructive/5",
                  labelColor: "text-destructive",
                },
                {
                  title: "Formats",
                  items: [
                    "SVG: preferred for all digital uses (web, UI, presentations)",
                    "PNG: use when SVG is not supported (social, email)",
                    "Always use the highest-quality asset available for the context",
                    "Contact the team for print-ready formats",
                  ],
                  accent: "border-border-muted bg-surface-card",
                  labelColor: "text-muted-foreground",
                },
              ].map(({ title, items, accent, labelColor }) => (
                <div key={title} className={cn("rounded-xl border p-6", accent)}>
                  <p className={cn("mb-4 font-mono text-[0.7rem] font-bold tracking-[0.18em] uppercase", labelColor)}>
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.82rem] leading-[1.65] text-muted-foreground">
                        <span className="mt-[0.3em] h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default BrandGuidelinesPage;
