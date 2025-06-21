
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Feedback = Tables<"feedback">;

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log("Fetching testimonials...");
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .eq("is_approved", true)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching testimonials:", error);
          throw error;
        }

        console.log("Fetched testimonials:", data);
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error in fetchTestimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're gathering testimonials from our valued clients. Submit your feedback and it may appear here once approved!
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Hear what our clients have to say
            about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="pt-6 pb-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-corporate-50 p-3">
                  <Quote className="text-corporate-600" size={24} />
                </div>
              </div>
              
              {currentTestimonial.rating && (
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonial.rating!
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}

              <p className="text-xl text-center mb-6 text-gray-700">
                "{currentTestimonial.message}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-lg">
                  {currentTestimonial.name}
                </p>
                {(currentTestimonial.position || currentTestimonial.company) && (
                  <p className="text-gray-500">
                    {[currentTestimonial.position, currentTestimonial.company]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft size={16} />
              </Button>
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant={index === activeIndex ? "default" : "outline"}
                  size="icon"
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full p-0 ${
                    index === activeIndex
                      ? "bg-corporate-600"
                      : "bg-transparent border-gray-300"
                  }`}
                />
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
