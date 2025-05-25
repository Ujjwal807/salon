import About from "../about"
import Navbar from "../navbar"
import Contact from "../contact"
import Footer from "../footer"
import Hero from "../hero"
import Services from "../services"

export default function SalonLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#faf5ff] to-[#ffffff]">
      {/* Main Content Container */}
      <div className="mx-2 sm:mx-4 lg:mx-10 px-2 sm:px-4 py-2 sm:py-4 lg:py-8">
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden">
          <Navbar />

          <Hero />

          {/* Brands Section */}
          <section className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12 border-t border-gray-100">
            <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                Brands we've collaborated with
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-12 opacity-60">
                <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#8b5cf6]">GQ</div>
                <div className="text-sm sm:text-base lg:text-xl font-serif text-gray-800">ELLE</div>
                <div className="text-sm sm:text-base lg:text-xl font-bold text-[#e91e63]">COSMOPOLITAN</div>
                <div className="text-sm sm:text-base lg:text-xl font-serif text-gray-800">VOGUE</div>
                <div className="text-sm sm:text-base lg:text-xl font-bold text-[#8b5cf6]">SALON</div>
                <div className="text-sm sm:text-base lg:text-xl text-[#8b5cf6]">teespring</div>
              </div>
            </div>
          </section>

          <About />

          <Services />

          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  )
}
