import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Bella Salon</h3>
              <p className="text-sm text-purple-400">Beauty & Wellness</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your beauty at Pune's premier salon. We offer professional hair styling, skincare, and beauty treatments with a focus on excellence and customer satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">Koregaon Park, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">info@bellasalon.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-purple-400" /> for beautiful you
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 Bella Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;