import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Ready to transform your look? Contact us today to book your appointment or learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gray-900" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Visit Our Salon</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Shop 57, VJ happiness street, Hinjawadi Rajiv Gandhi Infotech Park,
                  <br />
                  Pimpri-Chinchwad, Pune, Maharashtra 411057,
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-gray-900" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Call Us</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+917276135735"
                    className="block text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                  >
                    +91 7276135735
                  </a>
                  <a
                    href="tel:+917276135735"
                    className="block text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                  >
                    +91 7276135735
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-gray-900" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Email Us</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:info@bohounisexsalon.com"
                    className="block text-sm sm:text-base text-gray-600 hover:text-black transition-colors break-all"
                  >
                    info@bohounisexsalon.com
                  </a>
                  <a
                    href="mailto:bookings@bohounisexsalon.com"
                    className="block text-sm sm:text-base text-gray-600 hover:text-black transition-colors break-all"
                  >
                    bookings@bohounisexsalon.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-gray-900" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Working Hours</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Monday - Sunday
                  <br />
                  11:30 AM - 10:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Book an Appointment</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all text-sm sm:text-base"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all text-sm sm:text-base"
              />

              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all text-gray-600 text-sm sm:text-base">
                <option>Select Service</option>
                <option>Hair Styling</option>
                <option>Hair Coloring</option>
                <option>Facial Treatment</option>
                <option>Bridal Makeup</option>
                <option>Skin Care</option>
                <option>Nail Art</option>
              </select>

              <textarea
                placeholder="Special Requirements or Message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
