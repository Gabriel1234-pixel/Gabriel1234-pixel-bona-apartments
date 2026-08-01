export default function Gallery() {
  const images = [
    "/images/apartment1.jpg",
    "/images/apartment2.jpg",
    "/images/apartment3.jpg",
    "/images/apartment4.jpg",
    "/images/apartment5.jpg",
    "/images/apartment6.jpg",
  ];

  return (
    <section id="gallery" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-blue-700">
          Apartment Gallery
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Take a look at our beautiful apartments and facilities.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image}
                alt={`Apartment ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}