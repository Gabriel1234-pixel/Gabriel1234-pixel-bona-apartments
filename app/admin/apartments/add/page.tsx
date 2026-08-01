"use client";

import { useState } from "react";

export default function AddApartmentPage() {
  const [form, setForm] = useState({
    apartment_name: "",
    apartment_type: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    image: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/apartments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setMessage(data.message);

    if (data.success) {
      setForm({
        apartment_name: "",
        apartment_type: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        image: "",
        description: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Add Apartment
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="apartment_name"
            placeholder="Apartment Name"
            value={form.apartment_name}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <input
            type="text"
            name="apartment_type"
            placeholder="Apartment Type"
            value={form.apartment_type}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-6"
            rows={4}
          />

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
          >
            Save Apartment
          </button>

          {message && (
            <p className="mt-4 text-green-600">
              {message}
            </p>
          )}

        </form>
      </div>
    </div>
  );
}