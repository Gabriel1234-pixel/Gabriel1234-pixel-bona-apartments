export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
          About Bona Apartments
        </p>

        <h2 className="text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
          Comfortable Living Spaces
          <br />
          Designed For You
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

        <p className="max-w-3xl mx-auto mt-8 text-gray-600 text-lg leading-8">
          Bona Apartments offers spacious one and two-bedroom units in a
          five-storey building strategically located in Naivasha. The first
          floor is currently complete and ready for occupation, offering
          modern finishes, secure parking, and a safe environment for
          individuals and families.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🛏️</div>
            <h3 className="text-xl font-bold text-gray-900">
              1 & 2 Bedroom Units
            </h3>
            <p className="text-gray-500 mt-2">
              Spacious & Modern
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900">
              5 Storey Building
            </h3>
            <p className="text-gray-500 mt-2">
              First Floor Available
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-bold text-gray-900">
              Ample Parking
            </h3>
            <p className="text-gray-500 mt-2">
              Secure Parking Space
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900">
              24/7 Security
            </h3>
            <p className="text-gray-500 mt-2">
              Your Safety Is Our Priority
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}