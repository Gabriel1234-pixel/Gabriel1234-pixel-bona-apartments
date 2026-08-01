export default function BookingForm() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Book a Viewing
        </h2>

        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg p-3"
              placeholder="07XXXXXXXX"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Apartment Type
            </label>
            <select className="w-full border rounded-lg p-3">
              <option>One Bedroom</option>
              <option>Two Bedroom</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Preferred Viewing Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}