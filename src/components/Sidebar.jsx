import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  CheckSquare,
  BarChart2,
  Settings
} from "lucide-react";

export default function Sidebar({ activeSection, onSectionChange }) {
  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 fixed">
      
      {/* Logo */}
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
        StudyTrack
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-3">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          section="overview"
          active={activeSection === "overview"}
          onClick={onSectionChange}
        />

        <SidebarItem
          icon={<BookOpen />}
          label="Cursos"
          section="courses"
          active={activeSection === "courses"}
          onClick={onSectionChange}
        />

        <SidebarItem
          icon={<CheckSquare />}
          label="Tareas"
          section="tasks"
          active={activeSection === "tasks"}
          onClick={onSectionChange}
        />

        <SidebarItem
          icon={<Calendar />}
          label="Calendario"
          section="calendar"
          active={activeSection === "calendar"}
          onClick={onSectionChange}
        />

        <SidebarItem
          icon={<BarChart2 />}
          label="Progreso"
          section="progress"
          active={activeSection === "progress"}
          onClick={onSectionChange}
        />

        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
          <SidebarItem
            icon={<Settings />}
            label="Configuración"
            section="settings"
            active={activeSection === "settings"}
            onClick={onSectionChange}
          />
        </div>
      </nav>
    </aside>
  );
}

/* Item reutilizable */
function SidebarItem({ icon, label, section, active, onClick }) {
  return (
    <button
      onClick={() => onClick(section)}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
        ${active
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `}
    >
      <span className="w-5 h-5">{icon}</span>
      {label}
    </button>
  );
}
