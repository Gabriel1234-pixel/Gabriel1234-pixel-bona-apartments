import {
  ShieldCheck,
  Car,
  Wifi,
  Droplets,
  Dumbbell,
  Trees,
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    {
      icon: <ShieldCheck size={45} />,
      title: "24/7 Security",
      desc: "Round-the-clock security and CCTV surveillance.",
    },
    {
      icon: <Car size={45} />,
      title: "Ample Parking",
      desc: "Safe and spacious parking for all residents.",
    },
    {
      icon: <Wifi size={45} />,
      title: "High-Speed Internet",
      desc: "Reliable Wi-Fi connectivity throughout the building.",
    },
    {
      icon: <Droplets size={45} />,
      title: "Reliable Water",
      desc: "Continuous clean water supply.",
    },
    {
      icon: <Dumbbell size={45} />,
      title: "Modern Living",
      desc: "Spacious rooms with quality finishes.",
    },
    {
      icon: <Trees size={45} />,
      title: "Peaceful Environment",
      desc: "Quiet and family-friendly surroundings.",
    },
  ];

  return (
    <section
      id="amenities"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Amenities
          </p>

          <h2 className="text-5xl font-black text-gray-900 mt-4">
            Everything You Need
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {amenities.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-10 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
            >

              <div className="text-yellow-500 flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}