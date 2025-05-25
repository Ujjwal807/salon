import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your look? Contact us today to book your appointment or learn more about our services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Salon</h3>
                <p className="text-gray-600">
                  123, Lane 5, Koregaon Park<br />
                  Pune, Maharashtra 411001<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +91 98765 43210<br />
                  +91 87654 32109
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  info@bellasalon.com<br />
                  bookings@bellasalon.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday<br />
                  10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
              />
              
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all text-gray-600">
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;