export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Bona Apartments
            </h3>
            <p className="text-gray-300">
              A modern residential development in Naivasha offering secure,
              comfortable, and affordable living. The first phase is complete,
              with additional floors planned as part of our five-storey
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-yellow-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#apartments" className="hover:text-yellow-500">
                  Apartments
                </a>
              </li>

              <li>
                <a href="#amenities" className="hover:text-yellow-500">
                  Amenities
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 text-gray-300">
              <p>📍 Naivasha, Kenya</p>
              <p>📞 0722 772 144</p>
              <p>📞 0722 391 791</p>
              <p>📞 0111 505 822</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Bona Apartments. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}