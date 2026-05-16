import Ticker from "@/components/ticker";
import { StructuredData } from "@/lib/seo";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import ServicesSection from "./_components/services-section";

const MainPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(StructuredData.LocalBusiness).replace(/</g, "\\u003c"),
        }}
      />
      {StructuredData.Services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(service).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <HeroSection />
      <Ticker />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
