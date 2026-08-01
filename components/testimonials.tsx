export default function Testimonials() {
  const reviews = [
    {
      name: "James M.",
      comment:
        "Bona Apartments offers a peaceful environment, excellent security, and modern living spaces.",
    },
    {
      name: "Sarah W.",
      comment:
        "The apartments are spacious, clean, and well maintained. I highly recommend them.",
    },
    {
      name: "David K.",
      comment:
        "Great location in Naivasha, reliable water supply, and ample parking for residents.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Residents Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Hear from people who have experienced Bona Apartments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{review.comment}"
              </p>

              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Resident
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}