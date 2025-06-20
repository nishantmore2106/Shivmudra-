
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with our team for inquiries about our services or to
            request a personalized solution for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-corporate-500 hover:bg-corporate-600 flex items-center justify-center gap-2">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Vadodara Office</h3>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="text-corporate-500 shrink-0 mt-1" size={20} />
                  <p>406/4th floor, center point, R.C.Dutt road. Alakpuri, Vadodaara</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Thane Office</h3>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="text-corporate-500 shrink-0 mt-1" size={20} />
                  <p>3 dipak nivas, hirubama smurti, vitava, Belapur road, Chhatrapati Shivaji Chowk, Thane 400605</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="text-corporate-500 shrink-0" size={20} />
                    <p>+91 9924457063</p>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="text-corporate-500 shrink-0" size={20} />
                    <p>smudrafacilityservices@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/shivmudra.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full text-corporate-500 hover:bg-corporate-100 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/shivmudra.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full text-corporate-500 hover:bg-corporate-100 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">Our Locations</h2>
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843920566!2d72.41492919513924!3d23.02065040859224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1652354482259!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shivmudra Facility Services Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
