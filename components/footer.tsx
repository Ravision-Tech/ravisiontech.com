import Link from "next/link";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

import { GitHubURL, InstagramURL } from "@/lib/links";

const Footer = () => {
  return (
    <footer className="relative z-[1] border-t border-[#222] px-12 max-md:px-6 py-7 flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center">
      <span className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.05em]">
        © 2026 Ravision Tech LLC — All rights reserved
      </span>
      <div className="flex gap-8 items-center list-none">
        <Link
          href="mailto:dylan@ravisiontech.com"
          className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.05em] hover:text-[#6FC0CA] transition-colors duration-200"
        >
          Email
        </Link>
        <Link
          href="#"
          className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.05em] hover:text-[#6FC0CA] transition-colors duration-200"
        >
          Privacy
        </Link>
        <Link
          href={InstagramURL}
          target="_blank"
          className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.05em] hover:text-[#6FC0CA] transition-colors duration-200"
        >
          <SiInstagram className="w-4 h-4" />
        </Link>
        <Link
          href={GitHubURL}
          target="_blank"
          className="font-mono-brand text-[0.65rem] text-[#3d3d3d] tracking-[0.05em] hover:text-[#6FC0CA] transition-colors duration-200"
        >
          <SiGithub className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
