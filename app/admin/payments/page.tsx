"use client";

import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [payments, setPayments] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPayments();
  }, []);

  async function loadPayments() {
    const res = await fetch("/api/payments");
    const data = await res.json();

    if (Array.isArray(data)) {
      setPayments(data);
    } else {
      setPayments([]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Payments
        </h1>

        <a
          href="/admin/payments/add"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          + Record Payment
        </a>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search tenant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg p-3"
        />

      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4 text-left">Tenant</th>
              <th className="p-4 text-left">Apartment</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {payments
              .filter((payment) =>
                payment.full_name
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((payment) => (

                <tr
                  key={payment.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">
                    {payment.full_name}
                  </td>

                  <td className="p-4">
                    {payment.apartment_name}
                  </td>

                  <td className="p-4">
                    KSh {Number(payment.amount).toLocaleString()}
                  </td>

                  <td className="p-4">
                    {payment.payment_date}
                  </td>

                  <td className="p-4">
                    {payment.payment_method}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        payment.status === "Paid"
                          ? "bg-green-600"
                          : "bg-yellow-600"
                      }`}
                    >
                      {payment.status}
                    </span>

                  </td>

                  <td className="p-4 text-center">

                    <a
                      href={`/admin/payments/receipt/${payment.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      🧾 Receipt
                    </a>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}