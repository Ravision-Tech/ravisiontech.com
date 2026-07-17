"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDownIcon, SendHorizonalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { inputClass, labelClass } from "../../lib/helpers/contact-form-field-styles";

const SkelGroup = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-[0.45rem]">
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);

const FormSkeleton = () => (
  <phantom-ui
    loading
    animation="shimmer"
    duration={1.4}
    fallback-radius={8}
    background-color="rgba(130,130,130,0.16)"
    shimmer-color="rgba(165,165,165,0.30)"
    loading-label="Loading contact form"
    style={{ display: "block" }}
  >
    <div className="flex flex-col gap-5" aria-hidden>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <SkelGroup label="First Name">
          <input className={inputClass} disabled />
        </SkelGroup>
        <SkelGroup label="Last Name">
          <input className={inputClass} disabled />
        </SkelGroup>
      </div>
      <SkelGroup label="Email">
        <input className={inputClass} disabled />
      </SkelGroup>
      <SkelGroup label="Service Needed">
        <div className="relative">
          <input className={cn(inputClass, "pr-10")} disabled />
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </SkelGroup>
      <SkelGroup label="Project Details">
        <textarea className={cn(inputClass, "min-h-[120px] resize-y")} disabled />
      </SkelGroup>
      <button disabled className="w-full rounded-lg border-none px-8 py-4 text-[0.9rem] tracking-[0.03em]">
        <span className="flex flex-row items-center justify-center gap-2">
          Send Message
          <SendHorizonalIcon className="w-4" />
        </span>
      </button>
      <div className="flex flex-row items-center justify-center">
        <p className="text-[0.95rem] leading-[1.75] text-muted-foreground">This form is protected by reCAPTCHA.</p>
      </div>
    </div>
  </phantom-ui>
);

const ContactForm = dynamic(() => import("@/components/contact-form/contact-form"), {
  ssr: false,
});

const LazyContactForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    void import("@aejkatappaja/phantom-ui");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid">
      {inView && (
        <div
          className={cn("col-start-1 row-start-1 transition-opacity duration-500", ready ? "opacity-100" : "opacity-0")}
        >
          <ContactForm onReady={() => setReady(true)} />
        </div>
      )}
      {showSkeleton && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none col-start-1 row-start-1 transition-opacity duration-500",
            ready ? "opacity-0" : "opacity-100"
          )}
          onTransitionEnd={(e) => {
            if (ready && e.propertyName === "opacity") setShowSkeleton(false);
          }}
        >
          <FormSkeleton />
        </div>
      )}
    </div>
  );
};

export default LazyContactForm;
