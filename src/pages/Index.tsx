
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import Testimonials from "@/components/home/Testimonials";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceHighlights />
      <Testimonials />
      <FeaturedPackages />
      <CallToAction />
    </Layout>
  );
};

export default Index;
