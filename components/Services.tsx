import {
  Scissors,
  Palette,
  Sparkles,
  Crown,
  Heart,
  Flower,
} from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Professional cuts, styling, and treatments for all hair types",
      price: "₹500 onwards",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description:
        "Vibrant colors, highlights, and balayage by expert colorists",
      price: "₹1,500 onwards",
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Rejuvenating facials for glowing and healthy skin",
      price: "₹800 onwards",
    },
    {
      icon: Crown,
      title: "Bridal Makeup",
      description: "Complete bridal packages for your special day",
      price: "₹5,000 onwards",
    },
    {
      icon: Heart,
      title: "Skin Care",
      description: "Advanced skincare treatments and consultations",
      price: "₹600 onwards",
    },
    {
      icon: Flower,
      title: "Nail Art",
      description: "Creative nail designs and professional manicures",
      price: "₹300 onwards",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services
            designed to make you look and feel your best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <service.icon
                  className="text-purple-600 group-hover:text-white transition-colors duration-300"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-purple-600">
                  {service.price}
                </span>
                <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 flex justify-center">
          <Button
            variant="outline"
            className="border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white rounded-full px-6 lg:px-8 py-3 text-base lg:text-lg font-medium"
          >
            Show All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
