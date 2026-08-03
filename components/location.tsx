"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Our Location
          </p>

          <h2 className="text-5xl font-black text-gray-900 mt-4">
            Visit Bona Apartments
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-6"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="space-y-8">

              <div className="flex gap-5">

                <MapPin
                  className="text-yellow-500"
                  size={34}
                />

                <div>
                  <h3 className="font-bold text-2xl">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Naivasha, Kenya
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <Phone
                  className="text-yellow-500"
                  size={34}
                />

                <div>

                  <h3 className="font-bold text-2xl">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +254 7XX XXX XXX
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail
                  className="text-yellow-500"
                  size={34}
                />

                <div>

                  <h3 className="font-bold text-2xl">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    info@bonaapartments.co.ke
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Clock
                  className="text-yellow-500"
                  size={34}
                />

                <div>

                  <h3 className="font-bold text-2xl">
                    Office Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Sunday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-2xl overflow-hidden shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
}