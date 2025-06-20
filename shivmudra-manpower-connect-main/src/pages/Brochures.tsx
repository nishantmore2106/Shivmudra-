
import { useEffect } from "react";
import { setupScrollAnimation } from "@/utils/scrollAnimation";
import BrochureCard from "@/components/BrochureCard";

const brochures = [
  {
    title: "Company Profile",
    description: "Complete overview of Shivmudra Facility Services and our offerings.",
    viewUrl: "#",
    coverImage: "/lovable-uploads/7804b001-d339-41b8-90ec-19a8016392c6.png",
  },
  {
    title: "Our Services",
    description: "Detailed information about our housekeeping and commercial cleaning services.",
    viewUrl: "#",
    coverImage: "/lovable-uploads/b2cc6744-b077-417e-86a8-897e2b7ca545.png",
  },
  {
    title: "Our Mission & Vision",
    description: "Learn about our mission to deliver top-notch housekeeping services and our vision for the future.",
    viewUrl: "#",
    coverImage: "/lovable-uploads/19fbde32-06cb-4d81-8131-736ceae8968d.png",
  },
  {
    title: "Our Valuable Clients",
    description: "See the trusted partners who rely on our facility management services.",
    viewUrl: "#",
    coverImage: "/lovable-uploads/ff314b85-ae3e-4a06-8cba-386997847609.png",
  },
];

const Brochures = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="pt-24">
      <section className="py-12 bg-corporate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Brochures</h1>
            <p className="text-lg text-gray-600">
              View our brochures to learn more about our services and
              solutions. These resources provide detailed information about how
              we can help your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-4 justify-center">
            {brochures.map((brochure, index) => (
              <div key={index} className="animate-on-scroll w-64">
                <BrochureCard
                  title={brochure.title}
                  description={brochure.description}
                  viewUrl={brochure.viewUrl}
                  coverImage={brochure.coverImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Need Custom Information?</h2>
            <p className="text-gray-600 mb-8">
              If you don't find what you're looking for in our brochures or need
              more specific information, please contact us directly. We'll be
              happy to provide customized information tailored to your requirements.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-medium">Email</p>
                    <p>smudrafacilityservices@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+91 9924457063</p>
                  </div>
                  <div>
                    <p className="font-medium">Address 1</p>
                    <p>406/4th floor, Center Point, R.C. Dutt Road, Alakpuri, Vadodara</p>
                  </div>
                  <div>
                    <p className="font-medium">Address 2</p>
                    <p>3 Dipak Nivas, Hirubama Smurti, Vitava, Belapur Road, Chhatrapati Shivaji Chowk, Thane 400605</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochures;
