const BrandAssets = {
  logomark: {
    src: "/branding/logomarks/ravision-tech-logomark.svg",
    alt: "Ravision Tech Logomark",
  },
  "wordmark-white": {
    src: "/branding/wordmarks/ravision-tech-wordmark-white.svg",
    alt: "Ravision Tech Wordmark — White",
  },
  "wordmark-black": {
    src: "/branding/wordmarks/ravision-tech-wordmark-black.svg",
    alt: "Ravision Tech Wordmark — Black",
  },
  "wordmark-long-white": {
    src: "/branding/wordmarks/ravision-tech-wordmark-long-white.svg",
    alt: "Ravision Tech Long Wordmark — White",
  },
  "wordmark-long-black": {
    src: "/branding/wordmarks/ravision-tech-wordmark-long-black.svg",
    alt: "Ravision Tech Long Wordmark — Black",
  },
  "combinationmark-white": {
    src: "/branding/combinationmarks/ravision-tech-combinationmark-white.svg",
    alt: "Ravision Tech Combinationmark — White",
  },
  "combinationmark-black": {
    src: "/branding/combinationmarks/ravision-tech-combinationmark-black.svg",
    alt: "Ravision Tech Combinationmark — Black",
  },
  "combinationmark-long-black": {
    src: "/branding/combinationmarks/ravision-tech-combinationmark-long-black.svg",
    alt: "Ravision Tech Combinationmark — Black",
  },
  "combinationmark-long-white": {
    src: "/branding/combinationmarks/ravision-tech-combinationmark-long-white.svg",
    alt: "Ravision Tech Combinationmark — White",
  },
};

export type BrandAssetKey = keyof typeof BrandAssets;

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
