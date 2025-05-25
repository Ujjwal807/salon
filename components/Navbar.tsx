"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Menu, Phone, X } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-2 sm:py-2.5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  sm:flex-row justify-center md:justify-between items-center text-xs sm:text-sm text-purple-900 gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Phone size={12} className="sm:w-[14px] sm:h-[14px]" />
              <a href="tel:+917276135735" className="hover:text-purple-700 transition-colors">
                +91 7276135735
              </a>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span> Pimpri-Chinchwad, Pune</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
              <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span>Mon-Sun: 11:30 AM - 10:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 italic">BOHO UNISEX SALON
</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link
            href="#home"
            className="text-sm lg:text-base text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm lg:text-base text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm lg:text-base text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-sm lg:text-base text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Contacts
          </Link>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-medium">
            Book now
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
          <nav className="px-4 sm:px-6 py-4 space-y-4">
            <Link
              href="#home"
              className="block text-base text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-base text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block text-base text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="block text-base text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-purple-900">
                <Clock size={14} />
                <span>Mon-Sun: 11:30 AM - 10:30 PM</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
