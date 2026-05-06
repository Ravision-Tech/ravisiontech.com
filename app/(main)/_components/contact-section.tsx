import Link from "next/link";
import { MailIcon, MapPinIcon } from "lucide-react";

import ContactForm from "@/components/contact-form";
import SectionLabel from "@/components/section-label";
import { Branding } from "@/lib/branding";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-[1] bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6 py-28 max-md:py-20 grid grid-cols-2 max-md:grid-cols-1 gap-24 max-md:gap-12 items-start">
        <div>
          <SectionLabel label="Get in Touch" />
          <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold tracking-[-0.035em] leading-[1.04] mb-6">
            Let&apos;s build
            <br />
            <em className="not-italic text-primary">something great.</em>
          </h2>
          <p className="text-muted-foreground text-[0.95rem] leading-[1.75] mb-10">
            Tell us about your project. We&apos;ll respond within 48 hours with honest advice — not a sales pitch.
          </p>
          <div className="flex flex-col gap-4">
            <MetaItem icon={MailIcon}>
              <Link
                href={`mailto:${Branding.Email}`}
                className="underline underline-offset-4 hover:text-primary transition-colors duration-200"
              >
                hello@ravisiontech.com
              </Link>
            </MetaItem>
            <MetaItem icon={MapPinIcon}>Based in the US (working worldwide)</MetaItem>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

const MetaItem = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3 font-mono-brand text-[0.75rem] text-muted-foreground">
      <Icon className="text-primary w-4 h-4 shrink-0" />
      {children}
    </div>
  );
};

export default ContactSection;
