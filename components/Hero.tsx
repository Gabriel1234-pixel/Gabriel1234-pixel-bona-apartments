"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Building2,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
   <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/building.jpg"
        alt="Bona Apartments"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Small Heading */}
            <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm md:text-base font-semibold mb-5">
              Welcome To
            </p>

            {/* Main Heading */}
            <h1 className="text-white font-black leading-none text-5xl md:text-7xl xl:text-8xl">
              BONA
              <br />
              <span className="text-[#D4AF37]">
                APARTMENTS
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-gray-300 text-lg md:text-xl leading-8 max-w-2xl">
              Experience modern living in the heart of Naivasha.
              Spacious apartments designed for comfort, security,
              convenience and everyday luxury.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="#contact"
                className="bg-[#D4AF37] hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Book a Viewing
              </Link>

              <Link
                href="#apartments"
               scroll={true}
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                View Apartments
              </Link>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

             

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

                <Building2 className="text-[#D4AF37] mb-3" size={36} />

                <h3 className="text-3xl font-black text-white">
                  5
                </h3>

                <p className="text-gray-300">
                  Storeys
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

                <ShieldCheck className="text-[#D4AF37] mb-3" size={36} />

                <h3 className="text-3xl font-black text-white">
                  24/7
                </h3>

                <p className="text-gray-300">
                  Security
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">

                <MapPin className="text-[#D4AF37] mb-3" size={36} />

                <h3 className="text-3xl font-black text-white">
                  Prime
                </h3>

                <p className="text-gray-300">
                  Naivasha Location
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#07111f] to-transparent"></div>

    </section>
  );
}