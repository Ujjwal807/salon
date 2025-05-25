import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 overflow-hidden min-h-[70vh] sm:min-h-[80vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
              <span className="text-black">Hair by Design:</span>
              <br />
              <span className="text-gray-900">Where Imagination</span>
              <br />
              <span className="text-gray-900">Takes Shape</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Transform your look with our expert stylists who bring creativity and precision to every cut, color, and
              style.
            </p>

            <button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
              Get Started
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Woman with vibrant styled hair"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gray-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-300/20 rounded-full blur-xl"></div>
    </section>
  )
}

export default Hero
