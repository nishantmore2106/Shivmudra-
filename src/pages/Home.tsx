
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FounderSection from "@/components/FounderSection";
import { setupScrollAnimation } from "@/utils/scrollAnimation";

const Home = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">
                Welcome to Shivmudra Facility Services
              </h2>
              <p className="text-gray-600 mb-4">
                Established with a vision to provide quality manpower solutions, Shivmudra has 
                become a trusted name in facility management and staffing services across various industries.
              </p>
              <p className="text-gray-600 mb-4">
                We understand the challenges businesses face when it comes to managing human resources. 
                Our comprehensive solutions ensure that you get the right personnel with the right skills, 
                enabling you to focus on your core business activities.
              </p>
              <p className="text-gray-600">
                With a team of experienced professionals and a robust recruitment process, 
                we ensure that all our staff members are thoroughly vetted and trained before deployment.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <StatsSection />
      <FounderSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
