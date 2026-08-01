"use client";

import { useEffect, useState } from "react";

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
    <section id="apartments" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Available Apartments
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {apartments.map((apartment) => (

            <div
              key={apartment.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

             <img
  src={
    apartment.image && apartment.image.trim() !== ""
      ? `/images/${apartment.image}`
      : "https://placehold.co/600x400?text=No+Image"
  }
  alt={apartment.apartment_name}
  className="w-full h-56 object-cover"
/>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {apartment.apartment_name}
                </h3>

                <p className="text-gray-600">
                  {apartment.apartment_type}
                </p>

                <p className="text-blue-700 font-bold mt-4">
                  KSh {Number(apartment.price).toLocaleString()}
                </p>

                <p className="mt-2">
                  🛏 {apartment.bedrooms} Bedrooms
                </p>

                <p>
                  🚿 {apartment.bathrooms} Bathrooms
                </p>

                <p className="text-gray-500 mt-3">
                  {apartment.description}
                </p>

                <a
  href={`/apartments/${apartment.id}`}
  className="mt-5 inline-block bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800"
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