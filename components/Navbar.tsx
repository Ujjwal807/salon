import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Clock, MapPin, Menu, Phone } from 'lucide-react'


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm text-purple-900 gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Koregaon Park, Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
        <div className="px-4 lg:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center">
            <span className="text-xl lg:text-2xl font-bold text-gray-800 italic">
                Elegance
            </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-gray-800 font-medium">
                Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-800 font-medium">
                Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-800 font-medium">
                About Us
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800 font-medium">
                Contacts
            </Link>
            </nav>
            <div className="flex items-center space-x-4">
            <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-4 lg:px-6 text-sm lg:text-base">
                Book now
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
            </Button>
            </div>
            </div>
    </header>
  );
};

export default Header;













// export default function Navbar() {
//   return (
//     <div>
//       <header className="px-4 lg:px-12 py-6 flex items-center justify-between">
//       {/* Top bar with contact info */}
//       <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-2">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center md:justify-between items-center text-sm text-purple-900 gap-4">
//             <div className="flex items-center gap-2">
//               <Phone size={14} />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={14} />
//               <span>Koregaon Park, Pune</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock size={14} />
//               <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
//             </div>
//           </div>
//         </div>
//       </div>

//             <div className="flex items-center">
//               <span className="text-xl lg:text-2xl font-bold text-gray-800 italic">
//                 Elegance
//               </span>
//             </div>
//             <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
//               <Link
//                 href="#home"
//                 className="text-gray-600 hover:text-gray-800 font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="#services"
//                 className="text-gray-600 hover:text-gray-800 font-medium"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="#about"
//                 className="text-gray-600 hover:text-gray-800 font-medium"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-gray-600 hover:text-gray-800 font-medium"
//               >
//                 Contacts
//               </Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-4 lg:px-6 text-sm lg:text-base">
//                 Book now
//               </Button>
//               <Button variant="ghost" size="sm" className="md:hidden">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </div>
//           </header>
//     </div>
//   )
// }
