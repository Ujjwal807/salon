import { Award, Users, Clock, Star } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "1000+", label: "Services Done" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Bella Salon</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Koregaon Park, Pune, Bella Salon has been serving the beauty needs of our community for over 5 years. We pride ourselves on providing exceptional service in a welcoming and luxurious environment.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified stylists and beauticians stays updated with the latest trends and techniques to ensure you receive the best possible care.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-purple-600" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Woman with beautiful curly hair"
                  width={400}
                  height={400}
                  className="object-cover rounded-2xl w-full max-w-sm lg:max-w-none h-auto"
                />
              </div>
        </div>
      </div>
    </section>
  );
};

export default About;