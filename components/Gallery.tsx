"use client";

import Image from "next/image";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#07111f]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Gallery
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Explore Bona Apartments
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Take a closer look at our apartments, surroundings,
            and the lifestyle that awaits you.
          </p>

        </div>

        {/* Image Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {images.map((image, index) => (

            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group
              ${index === 0 ? "md:col-span-2 md:row-span-2 h-[500px]" : "h-60"}
              `}
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}