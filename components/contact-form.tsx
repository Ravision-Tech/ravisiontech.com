"use client";

import { useRef, useState } from "react";
import { ChevronDownIcon, Loader2Icon, SendHorizonalIcon, SparklesIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const inputClass =
  "bg-background border border-border text-foreground placeholder-dim px-4 py-[0.85rem] rounded-lg font-sans text-[0.88rem] outline-none focus:border-primary transition-colors duration-200 w-full appearance-none";

const labelClass = "font-mono-brand text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setService("");
      formRef.current?.reset();
      setTimeout(() => {
        setSent(false);
      }, 3500);
    }, 400);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div className="flex flex-col gap-[0.45rem]">
          <label className={labelClass}>First Name</label>
          <input className={inputClass} type="text" placeholder="John" required />
        </div>
        <div className="flex flex-col gap-[0.45rem]">
          <label className={labelClass}>Last Name</label>
          <input className={inputClass} type="text" placeholder="Smith" />
        </div>
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Email</label>
        <input className={inputClass} type="email" placeholder="john@company.com" required />
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Service Needed</label>
        <div className="relative">
          <select
            className={cn(inputClass, "pr-10", service === "" && "text-muted-foreground cursor-pointer")}
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
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      <div className="flex flex-col gap-[0.45rem]">
        <label className={labelClass}>Project Details</label>
        <textarea
          className={cn(inputClass, "resize-y min-h-[120px]")}
          placeholder="Tell us about your project, goals, timeline, budget..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={sent || loading}
        className={cn(
          "mt-[0.4rem] w-full py-4 px-8 rounded-lg font-bold text-[0.9rem] tracking-[0.03em] transition-all duration-200 cursor-pointer border-none",
          sent
            ? "bg-brand-success text-foreground cursor-not-allowed opacity-100"
            : "bg-primary text-primary-foreground hover:opacity-85 hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
        )}
      >
        {sent ? (
          <span className="flex flex-row gap-2 items-center justify-center">
            Message Sent!
            <SparklesIcon className="w-4" />
          </span>
        ) : loading ? (
          <span className="flex flex-row gap-2 items-center justify-center">
            Sending...
            <Loader2Icon className="w-4 animate-spin" />
          </span>
        ) : (
          <span className="flex flex-row gap-2 items-center justify-center">
            Send Message
            <SendHorizonalIcon className="w-4" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
