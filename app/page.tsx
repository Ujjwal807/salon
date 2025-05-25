import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  Star,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function SalonLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#faf5ff] to-[#ffffff]">
      {/* Main Content Container */}
      <div className="mx-10 px-4 py-4 lg:py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <Navbar />

          <Hero />

          {/* Brands Section */}
          <section className="px-4 lg:px-12 py-8 lg:py-12 border-t border-gray-100">
            <div className="text-center space-y-6 lg:space-y-8">
              <p className="text-gray-600 font-medium text-sm lg:text-base">
                Brands we've collaborated with
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-12 opacity-60">
                <div className="text-lg lg:text-2xl font-bold text-[#8b5cf6]">
                  GQ
                </div>
                <div className="text-base lg:text-xl font-serif text-gray-800">
                  ELLE
                </div>
                <div className="text-base lg:text-xl font-bold text-[#e91e63]">
                  COSMOPOLITAN
                </div>
                <div className="text-base lg:text-xl font-serif text-gray-800">
                  VOGUE
                </div>
                <div className="text-base lg:text-xl font-bold text-[#8b5cf6]">
                  SALON
                </div>
                <div className="text-base lg:text-xl text-[#8b5cf6]">
                  teespring
                </div>
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
  );
}
