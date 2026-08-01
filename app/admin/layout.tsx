"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

interface User {
  full_name: string;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        {/* Header */}

        <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Bona Apartments Admin
          </h1>

          <div className="font-semibold text-gray-700">
            Welcome {user?.full_name || "Admin"} 👋
          </div>

        </header>

        {/* Main Content */}

        <main className="bg-gray-100 min-h-screen p-8">
          {children}
        </main>

      </div>

    </div>
  );
}