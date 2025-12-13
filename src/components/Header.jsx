import React from "react";
import { Bell, User } from "lucide-react";

export default function DashboardHeader({ setActiveSection }) {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer">
        StudyTrack
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => setActiveSection("notifications")}
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>


        <button
          onClick={() => setActiveSection("profile")}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition"
        >
          <User className="w-5 h-5" />
          Perfil
        </button>

      </div>

    </header>
  );
}
