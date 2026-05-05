import { ReactNode } from "react";
import { MoveRightIcon } from "lucide-react";

import ContactForm from "@/components/contact-form";
import SectionLabel from "@/components/section-label";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-[1] bg-[#141414] border-t border-[#222]">
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6 py-28 max-md:py-20 grid grid-cols-2 max-md:grid-cols-1 gap-24 max-md:gap-12 items-start">
        <div>
          <SectionLabel label="Get in Touch" />
          <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold tracking-[-0.035em] leading-[1.04] mb-6">
            Let&apos;s build
            <br />
            <em className="not-italic text-[#6FC0CA]">something great.</em>
          </h2>
          <p className="text-[#7a7a7a] text-[0.95rem] leading-[1.75] mb-10">
            Tell us about your project. We&apos;ll respond within 24 hours with honest advice — not a sales pitch.
          </p>
          <div className="flex flex-col gap-4">
            <MetaItem>dylan@ravisiontech.com</MetaItem>
            <MetaItem>Based in the US — working worldwide</MetaItem>
            <MetaItem>ravisiontech.com</MetaItem>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

const MetaItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-3 font-mono-brand text-[0.75rem] text-[#7a7a7a]">
      <MoveRightIcon className="text-[#6FC0CA] w-4" />
      {children}
    </div>
  );
};

export default ContactSection;
