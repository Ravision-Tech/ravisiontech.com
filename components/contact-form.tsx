"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, Loader2Icon, SendHorizonalIcon, SparklesIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import Button from "@/components/button";
import { cn } from "@/lib/utils";

const inputClass =
  "bg-background border border-border text-foreground px-4 placeholder-dim py-[0.85rem] rounded-lg font-sans text-[0.88rem] outline-none focus:border-primary transition-colors duration-200 w-full appearance-none";

const labelClass = "font-mono-brand text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground";

const ContactFormInner = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [showV2, setShowV2] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaV2Ref = useRef<ReCAPTCHA>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const submit = useCallback(
    async (captchaToken: string, version: "v2" | "v3") => {
      const data = new FormData(formRef.current!);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          service,
          details: data.get("details"),
          captchaToken,
          captchaVersion: version,
        }),
      });

      const json = await res.json();

      if (json.requireChallenge) {
        setShowV2(true);
        return;
      }

      if (!res.ok) throw new Error();

      setSent(true);
      setService("");
      setShowV2(false);
      recaptchaV2Ref.current?.reset();
      formRef.current?.reset();
      setTimeout(() => setSent(false), 3500);
    },
    [service]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!executeRecaptcha) return;

    if (showV2) {
      const v2Token = recaptchaV2Ref.current?.getValue();
      if (!v2Token) {
        alert("Please complete the CAPTCHA.");
        return;
      }
      setLoading(true);
      try {
        await submit(v2Token, "v2");
      } catch {
        alert("Something went wrong. Please try again.");
        recaptchaV2Ref.current?.reset();
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    try {
      const v3Token = await executeRecaptcha("contact_form");
      await submit(v3Token, "v3");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col gap-[0.45rem]">
          <label className={labelClass}>First Name</label>
          <input className={inputClass} type="text" name="firstName" placeholder="John" required />
        </div>
        <div className="flex flex-col gap-[0.45rem]">
          <label className={labelClass}>Last Name</label>
          <input className={inputClass} type="text" name="lastName" placeholder="Smith" />
        </div>
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Email</label>
        <input className={inputClass} type="email" name="email" placeholder="john@company.com" required />
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Service Needed</label>
        <div className="relative">
          <select
            className={cn(inputClass, "pr-10", service === "" && "cursor-pointer text-muted-foreground")}
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled hidden>
              What do you need?
            </option>
            <option>Web Development</option>
            <option>Web Design</option>
            <option>E-Commerce</option>
            <option>SEO &amp; Performance</option>
            <option>Full Package</option>
            <option>Other</option>
            <option>Not Sure Yet</option>
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Project Details</label>
        <textarea
          className={cn(inputClass, "min-h-[120px] resize-y")}
          name="details"
          placeholder="Tell us about your project, goals, timeline, budget..."
          required
        />
      </div>

      {showV2 && (
        <div className="flex flex-col gap-2">
          <p className="text-[0.8rem] text-muted-foreground">Please confirm you're human to continue.</p>
          <ReCAPTCHA ref={recaptchaV2Ref} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY!} theme="dark" />
        </div>
      )}

      <Button
        type="submit"
        disabled={sent || loading}
        className={cn(
          "w-full border-none py-4 text-[0.9rem] tracking-[0.03em]",
          sent
            ? "cursor-not-allowed bg-brand-success text-foreground opacity-100 hover:translate-y-0 hover:opacity-100"
            : "disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
        )}
      >
        {sent ? (
          <span className="flex flex-row items-center justify-center gap-2">
            Message Sent!
            <SparklesIcon className="w-4" />
          </span>
        ) : loading ? (
          <span className="flex flex-row items-center justify-center gap-2">
            Sending...
            <Loader2Icon className="w-4 animate-spin" />
          </span>
        ) : (
          <span className="flex flex-row items-center justify-center gap-2">
            Send Message
            <SendHorizonalIcon className="w-4" />
          </span>
        )}
      </Button>
      <div className="flex flex-row items-center justify-center">
        <p className="mb-10 text-[0.95rem] leading-[1.75] text-muted-foreground">
          This form is protected by{" "}
          <Link
            href="https://www.google.com/recaptcha"
            target="_blank"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            reCAPTCHA
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

const ContactForm = () => (
  <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY!}>
    <ContactFormInner />
  </GoogleReCaptchaProvider>
);

export default ContactForm;
