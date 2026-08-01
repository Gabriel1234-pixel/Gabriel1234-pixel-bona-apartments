"use client";

import { useEffect, useState } from "react";

export default function TenantsPage() {
  const [tenants, setTenants] = useState<any[]>([]);

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    const res = await fetch("/api/tenants");
    const data = await res.json();
    setTenants(data);
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Tenant Management
        </h1>

        <a
          href="/admin/tenants/add"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Tenant
        </a>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Apartment</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {tenants.length === 0 ? (

              <tr>
                <td
                  colSpan={5}
                  className="text-center p-8 text-gray-500"
                >
                  No tenants found.
                </td>
              </tr>

            ) : (

              tenants.map((tenant) => (

                <tr
                  key={tenant.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{tenant.full_name}</td>

                  <td className="p-4">{tenant.phone}</td>

                  <td className="p-4">{tenant.email}</td>

                  <td className="p-4">
                    {tenant.apartment_name || "Not Assigned"}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        tenant.status === "Active"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </td>
                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}