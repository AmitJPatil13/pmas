"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "teacher" | "admin";
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const teacherNavItems = [
    { name: "Overview", href: "/dashboard/teacher" },
    { name: "Self Assessment", href: "/dashboard/teacher/assessment" },
    { name: "Documents", href: "/dashboard/teacher/documents" },
    { name: "Profile", href: "/dashboard/teacher/profile" },
  ];

  const adminNavItems = [
    { name: "Overview", href: "/dashboard/admin" },
    { name: "Faculty Management", href: "/dashboard/admin/faculty" },
    { name: "Reports", href: "/dashboard/admin/reports" },
    { name: "Settings", href: "/dashboard/admin/settings" },
  ];

  const navItems = userType === "teacher" ? teacherNavItems : adminNavItems;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              Faculty Monitor
            </h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded-md ${
                      pathname === item.href
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <button className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`${
          isSidebarOpen ? "ml-64" : "ml-0"
        } min-h-screen transition-margin duration-300 ease-in-out`}
      >
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, User</span>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 