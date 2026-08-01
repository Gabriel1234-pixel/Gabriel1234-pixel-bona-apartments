"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }
  async function deleteUser(id: number) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmed) return;

  const res = await fetch("/api/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();

  alert(data.message);

  if (data.success) {
    loadUsers();
  }
}

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Registered Users
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Full Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
<th className="p-4">Date Registered</th>
<th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {users
  .filter((user: any) =>
    user.full_name
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    user.email
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((user: any) => (

              <tr
                key={user.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">{user.id}</td>

                <td className="p-4">
                  {user.full_name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
  <span
    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
      user.role === "admin"
        ? "bg-red-600"
        : "bg-blue-600"
    }`}
  >
    {user.role}
  </span>
</td>
<td className="p-4 text-center">
  <button
  onClick={() => deleteUser(user.id)}
  disabled={user.role === "admin"}
  className={`px-4 py-2 rounded-lg text-white ${
    user.role === "admin"
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700"
  }`}
>
  {user.role === "admin" ? "Protected" : "Delete"}
</button>
</td>
<td className="p-4">
  {new Date(user.created_at).toLocaleDateString()}
</td>


              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
