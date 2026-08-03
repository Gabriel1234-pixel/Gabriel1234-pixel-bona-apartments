"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    apartment_type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/viewings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Viewing request submitted successfully!");

        setForm({
          full_name: "",
          email: "",
          phone: "",
          apartment_type: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-[#07111f] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
              Book a Viewing
            </p>

            <h2 className="text-5xl font-black text-white mt-4">
              Schedule Your Visit
            </h2>

            <p className="text-gray-300 mt-6 leading-8">
              Fill in the form and our team will contact you
              to arrange a viewing.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex gap-5">
                <Phone className="text-yellow-500" />
                <div>
                  <h3 className="text-white font-bold">
                    Phone
                  </h3>
                  <p className="text-gray-400">
                    +254 7XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-yellow-500" />
                <div>
                  <h3 className="text-white font-bold">
                    Email
                  </h3>
                  <p className="text-gray-400">
                    info@bonaapartments.co.ke
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-yellow-500" />
                <div>
                  <h3 className="text-white font-bold">
                    Address
                  </h3>
                  <p className="text-gray-400">
                    Naivasha, Kenya
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-2xl p-10 shadow-2xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={form.full_name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    full_name: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4"
                required
              />

              <select
                value={form.apartment_type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    apartment_type: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4"
                required
              >
                <option value="">Select Apartment</option>
                <option value="1 Bedroom">
                  1 Bedroom
                </option>
                <option value="2 Bedroom">
                  2 Bedroom
                </option>
              </select>

              <textarea
                rows={5}
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 py-4 rounded-lg font-bold text-black transition"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Request"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}