import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/0cfbfb1a-1680-46b1-8917-788470880367.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/9c797ae4-2461-41b5-afe7-cbc014cded71.png" 
              alt="SHIVMUDRA" 
              className="h-20 w-auto mr-3" 
            />
            <h2 className="text-2xl md:text-3xl text-white font-bold">Shivmudra Facility Services</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in">
            Professional Manpower Solutions for Every Industry
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 animate-slide-in opacity-90">
            Shivmudra Facility Services provides reliable, vetted workforce
            solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-corporate-500 hover:bg-corporate-600 text-white border-none h-12 px-8 text-base flex items-center gap-2 group">
              Partner with us <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 h-12 px-8 text-base bg-corporate-500 hover:bg-corporate-600"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
