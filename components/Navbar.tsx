import React, { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "📊", href: "/dashboard" },
    { name: "Patients", icon: "👥", href: "/patients" },
    { name: "Appointments", icon: "📅", href: "/appointments" },
    { name: "EHR", icon: "📋", href: "/ehr" },
    { name: "Billing", icon: "💳", href: "/billing" },
    { name: "Inventory", icon: "📦", href: "/inventory" },
    { name: "Reports", icon: "📈", href: "/reports" },
    { name: "Settings", icon: "⚙️", href: "/settings" },
  ];

  return (
    <>

      <header className="w-full bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-700 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>

            <div className="flex items-center gap-3">
               
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 hidden sm:block">Doctor's Connect</span>
            </div>
            <div className="flex gap-3">
  <button className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
    Login
  </button>

  <button className="px-5 py-2 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition">
    Sign Up
  </button>
</div>

          </div>
        </div>
      </header>


      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-slate-900 shadow-2xl transform transition-all duration-500 ease-in-out z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">

          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100 transition-all duration-200"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>


          <div className="px-4 py-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              © {new Date().getFullYear()} EkaCare. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 backdrop-blur-md z-30 md:hidden transition-all duration-500"
        ></div>
      )}
    </>
  );
}

export default Navbar;
