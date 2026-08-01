"use client";

import { useEffect, useState } from "react";

export default function AddMaintenancePage() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [apartments, setApartments] = useState<any[]>([]);

  const [form, setForm] = useState({
    tenant_id: "",
    apartment_id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    loadTenants();
    loadApartments();
  }, []);

  async function loadTenants() {
    const res = await fetch("/api/tenants");
    const data = await res.json();

    if (Array.isArray(data)) {
      setTenants(data);
    }
  }

  async function loadApartments() {
    const res = await fetch("/api/apartments");
    const data = await res.json();

    if (Array.isArray(data)) {
      setApartments(data);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      window.location.href = "/admin/maintenance";
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-8">

      <h1 className="text-3xl font-bold mb-8">
        Report Maintenance Issue
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <select
          name="tenant_id"
          value={form.tenant_id}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Tenant</option>

          {tenants.map((tenant) => (
            <option
              key={tenant.id}
              value={tenant.id}
            >
              {tenant.full_name}
            </option>
          ))}

        </select>

        <select
          name="apartment_id"
          value={form.apartment_id}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Apartment</option>

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
          type="text"
          name="title"
          placeholder="Issue Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Describe the problem..."
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Submit Request
        </button>

      </form>

    </div>
  );
}