
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const FounderSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center animate-on-scroll">
          <div className="w-full md:w-2/5">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/829b8a37-b223-4ff1-9f29-7e9ac581e669.png"
                alt="Dharmendra More - CEO"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="p-4">
              <div className="inline-flex items-center gap-2 mb-4 bg-corporate-100 px-4 py-2 rounded-full">
                <span className="font-medium text-corporate-700">Our Leadership</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Dharmendra More</h2>
              <div className="flex items-center mb-6">
                <p className="text-xl font-medium text-corporate-600">Founder & CEO</p>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  He is the Founder of Gujarat Manpower Services established in 2013 in Vadodara. 
                  GMS has been a Professional and Reliable Housekeeping Company serving numerous clients.
                </p>
                <p className="mb-4">
                  In 2022, he established Shivmudra Facility Services to provide top housekeeping services 
                  in Maharashtra and Gujarat. Under his leadership, the company has expanded its operations 
                  and built a strong reputation for reliability and professionalism.
                </p>
                <p>
                  With his extensive experience in the facility management industry, Dharmendra 
                  has developed deep insights into client needs and continues to drive the company 
                  forward with innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
