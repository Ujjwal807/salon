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
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-purple-600" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Visit Our Salon</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  123, Lane 5, Koregaon Park
                  <br />
                  Pune, Maharashtra 411001
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-600" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Call Us</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+919876543210"
                    className="block text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+918765432109"
                    className="block text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    +91 87654 32109
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Email Us</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:info@bohounisexsalon.com"
                    className="block text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors break-all"
                  >
                    info@bohounisexsalon.com
                  </a>
                  <a
                    href="mailto:bookings@bohounisexsalon.com"
                    className="block text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors break-all"
                  >
                    bookings@bohounisexsalon.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-purple-600" size={18} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Working Hours</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Monday - Sunday
                  <br />
                  10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Book an Appointment</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all text-sm sm:text-base"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all text-sm sm:text-base"
              />

              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all text-gray-600 text-sm sm:text-base">
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
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
