export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">
          Bona Apartments
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#apartments">Apartments</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}