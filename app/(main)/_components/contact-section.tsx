import Link from "next/link";
import { MailIcon, MapPinIcon } from "lucide-react";

import ContactForm from "@/components/contact-form";
import SectionLabel from "@/components/section-label";
import { Branding } from "@/lib/branding";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-card border-border relative z-[1] border-t">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-24 px-12 py-28 max-md:grid-cols-1 max-md:gap-12 max-md:px-6 max-md:py-20">
        <div>
          <SectionLabel label="Get in Touch" />
          <h2 className="mb-6 text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">
            Let&apos;s build
            <br />
            <em className="text-primary not-italic">something great.</em>
          </h2>
          <p className="text-muted-foreground mb-10 text-[0.95rem] leading-[1.75]">
            Tell us about your project. We&apos;ll respond within 48 hours with honest advice — not a sales pitch.
          </p>
          <div className="flex flex-col gap-4">
            <MetaItem icon={MailIcon}>
              <Link
                href={`mailto:${Branding.Email}`}
                className="hover:text-primary underline underline-offset-4 transition-colors duration-200"
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
    <div className="font-mono-brand text-muted-foreground flex items-center gap-3 text-[0.75rem]">
      <Icon className="text-primary h-4 w-4 shrink-0" />
      {children}
    </div>
  );
};

export default ContactSection;
