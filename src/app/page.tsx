import HeroSection from "@/components/homePageComponents/HeroSection";
import ServicesSection from "@/components/homePageComponents/ServicesSection";
import AboutUsSection from "@/components/homePageComponents/AboutUsSection";
import WhyChooseUs from "@/components/homePageComponents/WhyChooseUs";
import FaqSection from "@/components/homePageComponents/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUs />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}
