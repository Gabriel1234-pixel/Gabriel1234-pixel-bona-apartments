export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Apartment Options
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-xl rounded-xl p-8 border">
            <h3 className="text-3xl font-bold mb-4">
              One Bedroom
            </h3>

            <p className="text-gray-600 mb-6">
              Spacious and modern apartment suitable for individuals and couples.
            </p>

            <p className="text-2xl font-bold text-yellow-600 mb-6">
              Contact for Pricing
            </p>

            <ul className="space-y-2">
              <li>✓ Modern Kitchen</li>
              <li>✓ Spacious Living Room</li>
              <li>✓ Private Bathroom</li>
              <li>✓ Secure Parking</li>
            </ul>
          </div>

          <div className="shadow-xl rounded-xl p-8 border">
            <h3 className="text-3xl font-bold mb-4">
              Two Bedroom
            </h3>

            <p className="text-gray-600 mb-6">
              Comfortable family apartment with spacious rooms.
            </p>

            <p className="text-2xl font-bold text-yellow-600 mb-6">
              Contact for Pricing
            </p>

            <ul className="space-y-2">
              <li>✓ Master Bedroom</li>
              <li>✓ Dining Area</li>
              <li>✓ Modern Kitchen</li>
              <li>✓ 24/7 Security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}