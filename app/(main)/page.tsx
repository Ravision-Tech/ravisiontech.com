import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Ticker from "@/components/ticker";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import ServicesSection from "./_components/services-section";

export default function MainPage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Navbar />

      <HeroSection />
      <Ticker />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
