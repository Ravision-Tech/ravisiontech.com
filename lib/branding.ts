function asset(folder: string, slug: string, alt: string) {
  return {
    svg: `/branding/${folder}/${slug}.svg`,
    png: `/branding/${folder}/${slug}.png`,
    alt,
  };
}

export type BrandAsset = ReturnType<typeof asset>;

const BrandAssets = {
  logomarks: {
    logomark: asset("logomarks", "ravision-tech-logomark", "Ravision Tech Logomark"),
  },
  wordmarks: {
    white: asset("wordmarks", "ravision-tech-wordmark-white", "Ravision Tech Wordmark (White)"),
    black: asset("wordmarks", "ravision-tech-wordmark-black", "Ravision Tech Wordmark (Black)"),
    long: {
      white: asset("wordmarks", "ravision-tech-wordmark-long-white", "Ravision Tech Long Wordmark (White)"),
      black: asset("wordmarks", "ravision-tech-wordmark-long-black", "Ravision Tech Long Wordmark (Black)"),
    },
  },
  combinationmarks: {
    white: asset("combinationmarks", "ravision-tech-combinationmark-white", "Ravision Tech Combinationmark (White)"),
    black: asset("combinationmarks", "ravision-tech-combinationmark-black", "Ravision Tech Combinationmark (Black)"),
    long: {
      white: asset(
        "combinationmarks",
        "ravision-tech-combinationmark-long-white",
        "Ravision Tech Long Combinationmark (White)"
      ),
      black: asset(
        "combinationmarks",
        "ravision-tech-combinationmark-long-black",
        "Ravision Tech Long Combinationmark (Black)"
      ),
    },
  },
};

const BrandColors = [
  { name: "Light Blue", hex: "#6FC0CA", textClass: "text-[#131313]" },
  { name: "Dark Blue", hex: "#28335D", textClass: "text-white" },
  { name: "Aqua Blue", hex: "#23525E", textClass: "text-white" },
  { name: "Off Black", hex: "#131313", textClass: "text-white" },
  { name: "White", hex: "#FFFFFF", textClass: "text-[#131313]" },
];

export const Branding = {
  Name: "Ravision Tech",
  LegalName: "Ravision Tech LLC",
  Email: "hello@ravisiontech.com",
  BrandAssets,
  BrandColors,
  SocialPreviewImage: "/branding/meta-images/ravision-tech-social-preview-image.png",
  LegalCopyright: `© ${new Date().getFullYear()} Ravision Tech LLC — All rights reserved`,
};
