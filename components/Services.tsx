import { Scissors, Palette, Sparkles, Crown, Heart, Flower } from "lucide-react"
import { Button } from "@/components/ui/button"

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Professional cuts, styling, and treatments for all hair types",
      price: "₹500 onwards",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Vibrant colors, highlights, and balayage by expert colorists",
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
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our comprehensive range of beauty and wellness services designed to make you look and feel your
            best
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black transition-colors duration-300">
                <service.icon
                  className="text-gray-900 group-hover:text-white transition-colors duration-300"
                  size={24}
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg font-bold text-black">{service.price}</span>
                <button className="text-sm sm:text-base text-black hover:text-gray-700 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 sm:pt-12 flex justify-center">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Show All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
