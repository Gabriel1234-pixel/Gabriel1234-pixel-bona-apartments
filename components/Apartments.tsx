"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Apartment {
  id: number;
  apartment_name: string;
  apartment_type: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  description: string;
}

export default function Apartments() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    async function fetchApartments() {
      const res = await fetch("/api/public/apartments");
      const data = await res.json();
      setApartments(data);
    }

    fetchApartments();
  }, []);

  return (
    <section id="apartments" className="py-24 bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Our Apartments
          </p>

          <h2 className="text-5xl font-extrabold text-white mt-4">
            Find Your Perfect Home
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Explore our spacious apartments designed for comfort,
            convenience and modern living.
          </p>
        </div>

        {/* Apartment Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {apartments.map((apartment) => (

            <div
              key={apartment.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={
                    apartment.image && apartment.image.trim() !== ""
                      ? `/images/${apartment.image}`
                      : "/images/no-image.jpg"
                  }
                  alt={apartment.apartment_name}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                  KSh {Number(apartment.price).toLocaleString()}
                </div>

              </div>

              {/* Details */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {apartment.apartment_name}
                </h3>

                <p className="text-yellow-600 font-semibold mt-2">
                  {apartment.apartment_type}
                </p>

                <div className="flex justify-between mt-6 text-gray-600">

                  <div>
                    <span className="text-xl">🛏️</span>
                    <p>{apartment.bedrooms} Bedrooms</p>
                  </div>

                  <div>
                    <span className="text-xl">🚿</span>
                    <p>{apartment.bathrooms} Bathrooms</p>
                  </div>

                </div>

                <p className="text-gray-500 mt-6 line-clamp-3">
                  {apartment.description}
                </p>

                <a
                  href={`/apartments/${apartment.id}`}
                  className="mt-8 block w-full text-center bg-[#07111f] hover:bg-yellow-500 hover:text-black text-white py-4 rounded-xl font-bold transition"
                >
                  View Details
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}