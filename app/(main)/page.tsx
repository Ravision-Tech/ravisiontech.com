import Ticker from "@/components/ticker";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import ServicesSection from "./_components/services-section";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Ticker />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
