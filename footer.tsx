import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">Bella Salon</h3>
              <p className="text-xs sm:text-sm text-purple-400">Beauty & Wellness</p>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-md">
              Transform your beauty at Pune's premier salon. We offer professional hair styling, skincare, and beauty
              treatments with a focus on excellence and customer satisfaction.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-purple-400 mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">Koregaon Park, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-purple-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <a
                  href="tel:+919876543210"
                  className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-purple-400 flex-shrink-0 sm:w-4 sm:h-4" />
                <a
                  href="mailto:info@bellasalon.com"
                  className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors break-all"
                >
                  info@bellasalon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-400 flex items-center justify-center gap-2 mb-2 sm:mb-3">
            Made with <Heart size={14} className="text-purple-400 sm:w-4 sm:h-4" /> for beautiful you
          </p>
          <p className="text-xs sm:text-sm text-gray-500">© 2024 Bella Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
