import Link from "next/link";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

import { GitHubURL, InstagramURL } from "@/lib/links";

const Footer = () => {
  return (
    <footer className="border-border relative z-[1] flex items-center justify-between border-t px-12 py-7 max-md:flex-col max-md:gap-4 max-md:px-6 max-md:text-center">
      <span className="font-mono-brand text-dim text-[0.65rem] tracking-[0.05em]">
        © 2026 Ravision Tech LLC — All rights reserved
      </span>
      <div className="flex list-none items-center gap-8">
        <Link
          href="#"
          className="font-mono-brand text-dim hover:text-primary text-[0.65rem] tracking-[0.05em] transition-colors duration-200"
        >
          Privacy
        </Link>
        <Link
          href={InstagramURL}
          target="_blank"
          className="font-mono-brand text-dim hover:text-primary text-[0.65rem] tracking-[0.05em] transition-colors duration-200"
        >
          <SiInstagram className="h-4 w-4" />
        </Link>
        <Link
          href={GitHubURL}
          target="_blank"
          className="font-mono-brand text-dim hover:text-primary text-[0.65rem] tracking-[0.05em] transition-colors duration-200"
        >
          <SiGithub className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
