"use client";

import { useEffect, useState } from "react";

export default function AddTenantPage() {
  const [apartments, setApartments] = useState<any[]>([]);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    national_id: "",
    apartment_id: "",
    move_in_date: "",
  });

  useEffect(() => {
    loadApartments();
  }, []);

  async function loadApartments() {
    const res = await fetch("/api/apartments");
    const data = await res.json();
    setApartments(data);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      window.location.href = "/admin/tenants";
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold mb-8">
        Add Tenant
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="national_id"
          placeholder="National ID"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <select
          name="apartment_id"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        >
          <option value="">
            Select Apartment
          </option>

          {apartments.map((apartment) => (
            <option
              key={apartment.id}
              value={apartment.id}
            >
              {apartment.apartment_name}
            </option>
          ))}

        </select>

        <input
          type="date"
          name="move_in_date"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Save Tenant
        </button>

      </form>

    </div>
  );
}