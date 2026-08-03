"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Building2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Apartments", href: "#apartments" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07111f]/90 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link href="#home" className="flex items-center gap-3">

            <div className="bg-[#D4AF37] rounded-full p-2">
              <Building2 size={28} className="text-black" />
            </div>

            <div>

              <h1 className="text-white font-black text-2xl leading-none">
                BONA
              </h1>

              <p className="text-[#D4AF37] tracking-[4px] text-xs">
                APARTMENTS
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-[#D4AF37] transition
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#D4AF37]
                hover:after:w-full
                after:transition-all"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              Book a Viewing
            </a>

          </nav>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden bg-[#07111f] border-t border-gray-800">

          <div className="flex flex-col p-6 gap-5">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#D4AF37]"
              >
                {link.name}
              </a>

            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#D4AF37] text-black rounded-lg py-3 text-center font-bold"
            >
              Book a Viewing
            </a>

          </div>

        </div>

      )}

    </header>
  );
}