import HeroSection from "@/components/homePageComponents/HeroSection";
import ServicesSection from "@/components/homePageComponents/ServicesSection";
import AboutUsSection from "@/components/homePageComponents/AboutUsSection";
import WhyChooseUs from "@/components/homePageComponents/WhyChooseUs";
import FaqSection from "@/components/homePageComponents/FAQSection";
import Companies from "@/components/homePageComponents/Companies";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUs />
  <Companies />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}
