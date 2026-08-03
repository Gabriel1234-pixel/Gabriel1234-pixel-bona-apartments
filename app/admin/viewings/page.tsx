"use client";

import { useEffect, useState } from "react";

interface ViewingRequest {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  apartment_type: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminViewings() {
  const [requests, setRequests] = useState<ViewingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    try {
      const res = await fetch("/api/viewings");
      const data = await res.json();
      setRequests(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Viewing Requests
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p>No viewing requests found.</p>
      ) : (

        <div className="overflow-x-auto">

          <table className="min-w-full border border-gray-300">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Apartment</th>
                <th className="p-3 border">Message</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Date</th>
              </tr>

            </thead>

            <tbody>

              {requests.map((request) => (

                <tr key={request.id}>

                  <td className="border p-3">
                    {request.full_name}
                  </td>

                  <td className="border p-3">
                    {request.email}
                  </td>

                  <td className="border p-3">
                    {request.phone}
                  </td>

                  <td className="border p-3">
                    {request.apartment_type}
                  </td>

                  <td className="border p-3">
                    {request.message}
                  </td>

                  <td className="border p-3">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                      {request.status}
                    </span>
                  </td>

                  <td className="border p-3">
                    {new Date(request.created_at).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}