"use client";

import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    loadRequests();
  }, []);

  async function loadRequests() {
    const res = await fetch("/api/maintenance");
    const data = await res.json();

    if (Array.isArray(data)) {
      setRequests(data);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Maintenance Requests
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4">Tenant</th>
              <th className="p-4">Apartment</th>
              <th className="p-4">Title</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>

          </thead>

          <tbody>

            {requests.map((request) => (

              <tr
                key={request.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">
                  {request.full_name}
                </td>

                <td className="p-4">
                  {request.apartment_name}
                </td>

                <td className="p-4">
                  {request.title}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      request.status === "Completed"
                        ? "bg-green-600"
                        : request.status === "In Progress"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {request.status}
                  </span>

                </td>

                <td className="p-4">
                  {new Date(request.created_at).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}