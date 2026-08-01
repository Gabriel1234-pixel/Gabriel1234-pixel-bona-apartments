"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditApartmentPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    apartment_name: "",
    apartment_type: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    image: "",
    description: "",
    status: "Available",
  });

  useEffect(() => {
    async function fetchApartment() {
      const res = await fetch(`/api/apartments/${id}`);
      const data = await res.json();

      setForm({
        apartment_name: data.apartment_name || "",
        apartment_type: data.apartment_type || "",
        price: data.price || "",
        bedrooms: data.bedrooms || "",
        bathrooms: data.bathrooms || "",
        image: data.image || "",
        description: data.description || "",
        status: data.status || "Available",
      });
    }

    if (id) fetchApartment();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/apartments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      router.push("/admin/apartments");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Apartment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="apartment_name"
            value={form.apartment_name}
            onChange={handleChange}
            placeholder="Apartment Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="apartment_type"
            value={form.apartment_type}
            onChange={handleChange}
            placeholder="Apartment Type"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="w-full border p-3 rounded"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option>Available</option>
            <option>Occupied</option>
            <option>Under Maintenance</option>
          </select>

          <button
            type="submit"
            className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800"
          >
            Update Apartment
          </button>

        </form>

      </div>
    </div>
  );
}