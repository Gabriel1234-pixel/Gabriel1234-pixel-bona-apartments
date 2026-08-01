"use client";

import { useEffect, useState } from "react";

interface Apartment {
  id: number;
  apartment_name: string;
  apartment_type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
}

export default function ApartmentsPage() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [search, setSearch] = useState("");

  async function loadApartments() {
    const res = await fetch("/api/apartments");
    const data = await res.json();
    setApartments(data);
  }

  async function deleteApartment(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this apartment?"
    );

    if (!confirmed) return;

    const res = await fetch("/api/apartments", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      loadApartments();
    }
  }

  useEffect(() => {
    loadApartments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Apartments
        </h1>

        <a
          href="/admin/apartments/add"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          + Add Apartment
        </a>
      </div>

      {/* Search Box */}

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by apartment name, type or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4 text-left">Apartment</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Bedrooms</th>
              <th className="p-4 text-left">Bathrooms</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {apartments
              .filter((apartment) => {
                const query = search.toLowerCase();

                return (
                  apartment.apartment_name.toLowerCase().includes(query) ||
                  apartment.apartment_type.toLowerCase().includes(query) ||
                  apartment.status.toLowerCase().includes(query)
                );
              })
              .map((apartment) => (

                <tr
                  key={apartment.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">
                    {apartment.apartment_name}
                  </td>

                  <td className="p-4">
                    {apartment.apartment_type}
                  </td>

                  <td className="p-4">
                    KSh {Number(apartment.price).toLocaleString()}
                  </td>

                  <td className="p-4">
                    {apartment.bedrooms}
                  </td>

                  <td className="p-4">
                    {apartment.bathrooms}
                  </td>

                  <td className="p-4">
                    {apartment.status}
                  </td>

                  <td className="p-4 text-center">

                    <a
                      href={`/admin/apartments/edit/${apartment.id}`}
                      className="bg-green-600 text-white px-3 py-2 rounded mr-2 inline-block hover:bg-green-700"
                    >
                      Edit
                    </a>

                    <button
                      onClick={() => deleteApartment(apartment.id)}
                      className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            {apartments.filter((apartment) => {
              const query = search.toLowerCase();

              return (
                apartment.apartment_name.toLowerCase().includes(query) ||
                apartment.apartment_type.toLowerCase().includes(query) ||
                apartment.status.toLowerCase().includes(query)
              );
            }).length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No apartments found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}