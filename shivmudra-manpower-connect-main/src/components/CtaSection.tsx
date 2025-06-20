
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-corporate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner with us for reliable manpower solutions
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-corporate-100">
          Let us handle your manpower requirements while you focus on your core
          business activities.
        </p>
        <Button 
          className="bg-white text-corporate-800 hover:bg-gray-100 h-12 px-8 text-base flex items-center gap-2 group mx-auto"
        >
          Get in touch with us today <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
