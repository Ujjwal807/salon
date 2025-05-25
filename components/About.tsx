import { Award, Users, Clock, Star } from "lucide-react"
import Image from "next/image"

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "1000+", label: "Services Done" },
    { icon: Star, number: "4.9", label: "Average Rating" },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About Bella Salon</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Located in the heart of Koregaon Park, Pune, Bella Salon has been serving the beauty needs of our
              community for over 5 years. We pride ourselves on providing exceptional service in a welcoming and
              luxurious environment.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our team of certified stylists and beauticians stays updated with the latest trends and techniques to
              ensure you receive the best possible care.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <stat.icon className="text-purple-600" size={16} />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Woman with beautiful curly hair"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
