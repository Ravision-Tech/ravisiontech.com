import Link from "next/link";
import { MailIcon, MapPinIcon } from "lucide-react";

import ContactForm from "@/components/contact-form/contact-form-lazy";
import SectionLabel from "@/components/section-label";
import { Branding } from "@/lib/branding";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-[1] border-t border-border bg-card">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-24 px-12 py-28 max-md:grid-cols-1 max-md:gap-12 max-md:px-6 max-md:py-20">
        <div>
          <SectionLabel label="Get in Touch" />
          <h2 className="mb-6 text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">
            Your vision.
            <br />
            Our code.
            <br />
            <em className="text-primary not-italic">Let&apos;s talk.</em>
          </h2>
          <p className="mb-10 text-[0.95rem] leading-[1.75] text-muted-foreground">
            Drop us a note about what you're building. We&apos;ll reply within 48 hours with honest advice.
          </p>
          <div className="flex flex-col gap-4">
            <MetaItem icon={MailIcon}>
              <Link
                href={`mailto:${Branding.Email}`}
                className="underline underline-offset-4 transition-colors duration-200 hover:text-primary"
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
    <div className="font-mono-brand flex items-center gap-3 text-[0.75rem] text-muted-foreground">
      <Icon className="h-4 w-4 shrink-0 text-primary" />
      {children}
    </div>
  );
};

export default ContactSection;
