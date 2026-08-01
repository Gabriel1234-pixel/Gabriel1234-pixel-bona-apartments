export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Location
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Naivasha,Kenya&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Bona Apartments, Naivasha, Kenya
        </p>
      </div>
    </section>
  );
}