"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
  apartments: 0,
  available: 0,
  occupied: 0,
  users: 0,
  recent: [],
  recentUsers: [],
});

  useEffect(() => {
    async function loadStats() {
      const res = await fetch("/api/dashboard");
      const data = await res.json();
      setStats(data);
    }

    loadStats();
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">🏠 Total Apartments</h2>
          <p className="text-4xl font-bold mt-4">
            {stats.apartments}
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">✅ Available</h2>
          <p className="text-4xl font-bold mt-4">
            {stats.available}
          </p>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">🔑 Occupied</h2>
          <p className="text-4xl font-bold mt-4">
            {stats.occupied}
          </p>
        </div>

        <div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">👥 Registered Users</h2>
          <p className="text-4xl font-bold mt-4">
            {stats.users}
          </p>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <a
            href="/admin/apartments/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            ➕ Add Apartment
          </a>

          <a
            href="/admin/apartments"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            🏠 View Apartments
          </a>

          <a
            href="/admin/users"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            👥 Manage Users
          </a>

        </div>

      </div>

      {/* Recent Apartments */}

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Apartments
        </h2>

        <table className="w-full">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3 text-left">Apartment</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {stats.recent.length === 0 ? (

              <tr>
                <td
                  colSpan={4}
                  className="text-center p-6 text-gray-500"
                >
                  No apartments found.
                </td>
              </tr>

            ) : (

              stats.recent.map((apt: any) => (

                <tr
                  key={apt.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">
                    {apt.apartment_name}
                  </td>

                  <td className="p-3">
                    {apt.apartment_type}
                  </td>

                  <td className="p-3">
                    KSh {Number(apt.price).toLocaleString()}
                  </td>

                  <td className="p-3">
                    {apt.status}
                  </td>
                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Recent Users */}

      <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Recent Users
  </h2>

  <table className="w-full">

    <thead className="bg-gray-200">

      <tr>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Email</th>
      </tr>

    </thead>

    <tbody>

      {stats.recentUsers.length === 0 ? (

        <tr>
          <td
            colSpan={2}
            className="text-center p-6 text-gray-500"
          >
            No users found.
          </td>
        </tr>

      ) : (

        stats.recentUsers.map((user: any) => (

          <tr
            key={user.id}
            className="border-b hover:bg-gray-50"
          >
            <td className="p-3">
              {user.full_name}
            </td>

            <td className="p-3">
              {user.email}
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