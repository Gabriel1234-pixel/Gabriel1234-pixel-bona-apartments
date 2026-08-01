export default function Amenities() {
  const amenities = [
    {
      icon: "🚗",
      title: "Secure Parking",
      description: "Spacious parking available for all residents.",
    },
    {
      icon: "🛡️",
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance.",
    },
    {
      icon: "📶",
      title: " Wi-Fi Available",
      description: "High-speed internet throughout the property.",
    },
    
   
    {
      icon: "🌳",
      title: "Beautiful Gardens",
      description: "Well-maintained green spaces and walking paths.",
    },
  ];

  return (
    <section id="amenities" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-blue-700">
          Amenities
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Everything you need for comfortable modern living.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 text-6xl">{item.icon}</div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}