
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex items-center">
              <img 
                src="/lovable-uploads/9c797ae4-2461-41b5-afe7-cbc014cded71.png" 
                alt="SHIVMUDRA" 
                className="h-14 w-auto mr-2 brightness-200" 
              />
              <div className="text-xs font-medium text-gray-400">
                Facility Services
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing quality manpower solutions for various industries with
              reliability and excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/shivmudra.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/shivmudra.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/brochures"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Brochures
                </Link>
              </li>
              <li>
                <Link
                  to="/sites"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Sites
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Manpower Supply
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Facility Management
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Industrial Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-corporate-300 transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" /> Security Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-corporate-300 shrink-0" size={20} />
                <span className="text-gray-400">
                  406/4th floor, center point, R.C.Dutt road. Alakpuri, Vadodaara
                </span>
              </li>
              <li className="flex">
                <MapPin className="mr-3 text-corporate-300 shrink-0" size={20} />
                <span className="text-gray-400">
                Siddharth Chamber, Pathare Kshatriya Hall,  opposite Gaudevi Maidana, Office 1, Thane West 400602</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-corporate-300 shrink-0" size={20} />
                <span className="text-gray-400">+91 9924457063</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-corporate-300 shrink-0" size={20} />
                <span className="text-gray-400">smudrafacilityservices@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center text-gray-500 text-sm">
            © {currentYear} Shivmudra Facility Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
