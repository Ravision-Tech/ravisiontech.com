import Link from "next/link";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

import { GitHubURL, InstagramURL, LinkedInURL } from "@/lib/links";
import LinkedInIcon from "../lucide-custom/linkedin-icon";
import ThemeToggle from "../theme-toggle";
import FooterIconLink from "./footer-icon-link";

const Footer = () => {
  return (
    <footer className="relative z-[1] flex items-center justify-between border-t border-border px-12 py-7 max-md:flex-col max-md:gap-4 max-md:px-6 max-md:py-6">
      <span className="font-mono-brand text-[0.65rem] tracking-[0.05em] text-dim max-md:order-4">
        © 2026 Ravision Tech LLC — All rights reserved
      </span>

      <div className="flex items-center gap-8 max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-8 max-md:order-3 max-md:flex-col max-md:gap-4">
          {/* <Link
            href="/terms-and-conditions"
            className="font-mono-brand text-[0.65rem] tracking-[0.05em] text-dim transition-colors duration-200 hover:text-primary"
          >
            Terms
          </Link> */}
          {/* <Link
            href="/privacy-policy"
            className="font-mono-brand text-[0.65rem] tracking-[0.05em] text-dim transition-colors duration-200 hover:text-primary"
          >
            Privacy
          </Link> */}
          <Link
            href="/brand-guidelines"
            className="font-mono-brand text-[0.65rem] tracking-[0.05em] text-dim transition-colors duration-200 hover:text-primary"
          >
            Brand Guidelines
          </Link>
        </div>
        <div className="flex items-center gap-6 max-md:order-2">
          <FooterIconLink linkName="Instagram" link={InstagramURL} icon={SiInstagram} />
          <FooterIconLink linkName="LinkedIn" link={LinkedInURL} icon={LinkedInIcon} iconClassName="w-5 h-5" />
          <FooterIconLink linkName="GitHub" link={GitHubURL} icon={SiGithub} />
        </div>
        <div className="max-md:order-1 md:order-3">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
