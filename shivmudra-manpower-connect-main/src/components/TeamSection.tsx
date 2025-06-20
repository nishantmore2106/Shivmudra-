
import { useEffect } from "react";

const TeamSection = () => {
  const teamImages = [
    {
      id: 1,
      image: "/lovable-uploads/8e099a24-41d3-4222-98bc-aa6c38a1afa1.png",
      alt: "Team member cleaning escalator",
    },
    {
      id: 2,
      image: "/lovable-uploads/f8c95392-8a23-4413-8182-fa64a49034e0.png",
      alt: "Team member cleaning glass surfaces",
    },
    {
      id: 3,
      image: "/lovable-uploads/7c3dea47-6d01-4766-be3e-fd0ed2c1e8a4.png",
      alt: "Team members cleaning retail store",
    },
    {
      id: 4,
      image: "/lovable-uploads/584ce616-e27f-4a10-b93e-cbf07671cebf.png",
      alt: "Professional housekeeping team",
    },
    {
      id: 5,
      image: "/lovable-uploads/b7b9a686-cd91-4fb9-b1c6-34b9534e0446.png",
      alt: "Team member maintaining retail space",
    },
    {
      id: 6,
      image: "/lovable-uploads/42bdbc59-6fa7-4b2b-bc0d-1d87418cee3f.png",
      alt: "Team member cleaning retail floor",
    },
    {
      id: 7,
      image: "/lovable-uploads/8823902b-2d6a-4397-8ff4-31c5abf69ae9.png",
      alt: "Professional cleaning services",
    },
    {
      id: 8,
      image: "/lovable-uploads/f9b99f5d-06dd-4a79-9ec4-845f8cd074ee.png",
      alt: "Dedicated cleaning professional",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Our Dedicated Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet our professional workforce who ensure excellence in every service we provide. 
            Our trained staff is committed to maintaining the highest standards of cleanliness and facility management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamImages.map((member) => (
            <div key={member.id} className="animate-on-scroll">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-corporate-600">Why Choose Our Team?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-corporate-600 mb-2">100%</div>
                <p className="text-gray-600">Trained Professionals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-corporate-600 mb-2">24/7</div>
                <p className="text-gray-600">Service Availability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-corporate-600 mb-2">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
