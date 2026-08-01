"use client";

import { useEffect, useState } from "react";

export default function AddPaymentPage() {
  const [tenants, setTenants] = useState<any[]>([]);

  const [form, setForm] = useState({
    tenant_id: "",
    amount: "",
    payment_date: "",
    payment_method: "M-Pesa",
    status: "Paid",
  });

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    const res = await fetch("/api/tenants");
    const data = await res.json();
    setTenants(Array.isArray(data) ? data : []);
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

    const res = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      window.location.href = "/admin/payments";
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold mb-8">
        Record Payment
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
            <option key={tenant.id} value={tenant.id}>
              {tenant.full_name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="date"
          name="payment_date"
          value={form.payment_date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <select
          name="payment_method"
          value={form.payment_method}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>M-Pesa</option>
          <option>Bank Transfer</option>
          <option>Cash</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>Paid</option>
          <option>Pending</option>
        </select>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Save Payment
        </button>

      </form>

    </div>
  );
}