import { useEffect } from "react";
import { setupScrollAnimation } from "@/utils/scrollAnimation";
import { ArrowRight, Award, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import FounderSection from "@/components/FounderSection";
import TeamSection from "@/components/TeamSection";

const About = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="pt-24">
      <section className="py-12 bg-corporate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn more about Shivmudra Facility Services and our journey to
              becoming a leading manpower solutions provider.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Company building"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                <strong>Established in 2022</strong>, Shivmudra Facility Services is one of the most 
                reputed cleaning services providers in Mumbai and Vadodara, Gujarat, India. We specialize 
                in industrial & commercial services as well as housekeeping.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with a small team of dedicated professionals, we have
                grown into a comprehensive manpower solutions provider serving
                multiple industries across the country.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a steadfast commitment to quality,
                reliability, and customer satisfaction, which continues to drive
                our operations even today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-corporate-50 text-corporate-600 mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide top-quality manpower solutions that enable businesses
                to focus on their core competencies while we take care of their
                staffing needs with reliability and professionalism.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-corporate-50 text-corporate-600 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as the most trusted and preferred manpower
                solutions provider in India, known for our commitment to quality,
                transparency, and excellence in service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These core values guide our operations and interactions with clients,
              employees, and all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-corporate-600">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of honesty,
                transparency, and ethical practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-corporate-600">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of our service delivery,
                constantly improving our processes and systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-corporate-600">Reliability</h3>
              <p className="text-gray-600">
                We are committed to being dependable partners to our clients,
                consistently delivering on our promises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-corporate-600">Respect</h3>
              <p className="text-gray-600">
                We value diversity and treat all stakeholders with dignity and
                respect, fostering an inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FounderSection />

      <TeamSection />

      <section className="py-16 bg-corporate-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-gray-100 mb-4">
                Behind Shivmudra's success is a team of dedicated professionals
                with extensive experience in human resources, operations
                management, and various industry verticals.
              </p>
              <p className="text-gray-100 mb-4">
                Our team is committed to understanding your specific
                requirements and delivering customized manpower solutions that
                align with your business goals.
              </p>
              <Button 
                className="bg-white text-corporate-800 hover:bg-gray-100 mt-4 flex items-center gap-2 group"
              >
                Join Our Team <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-corporate-700 p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Users size={48} className="text-corporate-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Leadership</h3>
                  <p className="mb-4">
                    Led by industry veterans with over 20 years of combined
                    experience in manpower management and facility services.
                  </p>
                  <ul className="space-y-3 text-left text-gray-200">
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-corporate-300" />
                      <span>Experienced management team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-corporate-300" />
                      <span>Specialized industry knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-corporate-300" />
                      <span>Commitment to client success</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-corporate-300" />
                      <span>Focus on continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
