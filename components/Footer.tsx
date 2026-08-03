export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-black text-white">
              BONA
            </h2>

            <p className="text-yellow-500 font-semibold">
              APARTMENTS
            </p>

            <p className="mt-6">
              Luxury, comfort and security in the heart of Naivasha.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#">Home</a></li>
              <li><a href="#apartments">Apartments</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">
              Contact
            </h3>

            <p>Naivasha, Kenya</p>
            <p>+254 7XX XXX XXX</p>
            <p>info@bonaapartments.co.ke</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">
              Office Hours
            </h3>

            <p>Monday - Sunday</p>
            <p>8:00 AM - 6:00 PM</p>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center">
          © {new Date().getFullYear()} Bona Apartments. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}