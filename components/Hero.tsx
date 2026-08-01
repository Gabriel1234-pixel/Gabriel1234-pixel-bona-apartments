export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-slate-900 flex items-center justify-center text-white"
    >
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6">
          Bona Apartments
        </h1>

        <p className="text-2xl mb-8">
          Luxury, Comfort & Security
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
          Explore Apartments
        </button>
      </div>
    </section>
  );
}