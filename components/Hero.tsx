import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-100 via-purple-50 to-white py-20 overflow-hidden min-h-[80vh]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-purple-600">Hair by Design:</span><br />
              <span className="text-gray-900">Where Imagination</span><br />
              <span className="text-gray-900">Takes Shape</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              Transform your look with our expert stylists who bring creativity and precision to every cut, color, and style.
            </p>
            
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 font-medium flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
          
           <div className="relative w-full max-w-sm lg:max-w-none">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Woman with vibrant styled hair"
                    width={400}
                    height={500}
                    className="object-cover rounded-2xl w-full h-auto"
                  />
                </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
