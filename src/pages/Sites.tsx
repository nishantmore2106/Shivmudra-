import { useEffect } from "react";
import { setupScrollAnimation } from "@/utils/scrollAnimation";
import SiteCard from "@/components/SiteCard";

const sites = [
  {
    title: "Manufacturing Plants",
    location: "Multiple Locations, India",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Providing skilled production workers, supervisors, and quality control staff for manufacturing industries.",
  },
  {
    title: "Corporate Offices",
    location: "Major Metro Cities",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Housekeeping, security, and administrative support staff for corporate environments.",
  },
  {
    title: "Retail Outlets",
    location: "Pan India",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Sales staff, security personnel, and housekeeping services for retail chains.",
  },
  {
    title: "Healthcare Facilities",
    location: "Urban & Rural Areas",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Trained hospital support staff, security, and facility management services.",
  },
  {
    title: "Educational Institutions",
    location: "Nationwide",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Security, administrative, and maintenance personnel for schools and colleges.",
  },
  {
    title: "Hospitality Sector",
    location: "Tourist Destinations",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Housekeeping, kitchen staff, and security services for hotels and resorts.",
  },
  {
    title: "Warehouses & Logistics",
    location: "Industrial Hubs",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Material handlers, loaders, and security personnel for logistics operations.",
  },
];

const Sites = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="pt-24">
      <section className="py-12 bg-corporate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Sites</h1>
            <p className="text-lg text-gray-600">
              Discover the diverse industries and locations where Shivmudra
              Facility Services deploys its skilled workforce.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sites.map((site, index) => (
              <div key={index} className="animate-on-scroll">
                <SiteCard
                  title={site.title}
                  location={site.location}
                  image={site.image}
                  description={site.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our National Presence</h2>
            <p className="text-gray-600 mb-8">
              Shivmudra Facility Services has a strong presence across India,
              serving clients in various sectors with quality manpower solutions.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3">
                  <h3 className="font-bold text-corporate-600 text-2xl mb-1">3+</h3>
                  <p className="text-gray-600">States</p>
                </div>
                <div className="text-center p-3">
                  <h3 className="font-bold text-corporate-600 text-2xl mb-1">50+</h3>
                  <p className="text-gray-600">Cities</p>
                </div>
                <div className="text-center p-3">
                  <h3 className="font-bold text-corporate-600 text-2xl mb-1">50</h3>
                  <p className="text-gray-600">Active Sites</p>
                </div>
                <div className="text-center p-3">
                  <h3 className="font-bold text-corporate-600 text-2xl mb-1">8+</h3>
                  <p className="text-gray-600">Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sites;
