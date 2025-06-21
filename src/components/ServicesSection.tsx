
import { Home, Flower2, UserRound, Trash2, Wind, Droplets } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Housekeeping",
    description: "Professional housekeeping services for clean and hygienic environments.",
    icon: Home,
  },
  {
    title: "Gardening",
    description: "Expert gardening and landscaping services to maintain beautiful outdoor spaces.",
    icon: Flower2,
  },
  {
    title: "Office Boy",
    description: "Reliable office assistants to support your daily operational needs.",
    icon: UserRound,
  },
  {
    title: "Commercial Cleaning",
    description: "Comprehensive cleaning solutions for all types of commercial establishments.",
    icon: Trash2,
  },
  {
    title: "Window Cleaning",
    description: "Professional window cleaning services for streak-free, crystal clear results.",
    icon: Wind,
  },
  {
    title: "Other Services",
    description: "Additional specialized cleaning and maintenance services tailored to your needs.",
    icon: Droplets,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of cleaning and maintenance
            services to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
