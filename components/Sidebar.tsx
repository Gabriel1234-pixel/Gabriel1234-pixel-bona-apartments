"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  const menuItems = [
    {
      title: "📊 Dashboard",
      href: "/admin/dashboard",
    },
    {
      title: "🏠 Apartments",
      href: "/admin/apartments",
    },
    {
      title: "➕ Add Apartment",
      href: "/admin/apartments/add",
    },
    {
  title: "👤 Tenants",
  href: "/admin/tenants",
},
{
  title: "💳 Payments",
  href: "/admin/payments",
},
    {
      title: "👥 Users",
      href: "/admin/users",
    },
    
  ];

  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-blue-700 text-center">

        <h1 className="text-3xl font-bold">
          🏢
        </h1>

        <h2 className="text-xl font-bold mt-2">
          Bona Apartments
        </h2>

        <p className="text-blue-200 text-sm">
          Admin Panel
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-3 rounded-lg transition font-medium ${
              pathname === item.href
                ? "bg-white text-blue-900"
                : "hover:bg-blue-800"
            }`}
          >
            {item.title}
          </Link>
        ))}

      </nav>

      {/* Logout */}

      <div className="p-4 border-t border-blue-700">

        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
        >
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}