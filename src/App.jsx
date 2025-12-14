import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/Header";
import DashboardOverview from "./components/DashboardOverview";
import CourseCard from "./components/CourseCard";
import TaskManager from "./components/TaskManager";
import TaskCalendar from "./components/TaskCalendar";
import ProgressOverview from "./components/ProgressOverview";
import UserSettings from "./components/UserSettings";
import UserProfile from "./components/UserProfile";
import Notifications from "./components/Notifications";

function App() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="flex-1 ml-64 min-h-screen bg-gray-50 dark:bg-gray-950">
        <DashboardHeader setActiveSection={setActiveSection} />

        {activeSection === "notifications" && <Notifications />}
        {activeSection === "profile" && <UserProfile />}

        {activeSection === "overview" && <DashboardOverview />}

        {activeSection === "courses" && (
          <section className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tus Cursos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="React Básico"
                description="Aprende los fundamentos de React."
                progress={40}
              />
              <CourseCard
                title="Diseño UI/UX"
                description="Principios de diseño moderno."
                progress={72}
              />
              <CourseCard
                title="JavaScript Avanzado"
                description="Conceptos avanzados del lenguaje."
                progress={15}
              />
            </div>
          </section>
        )}

        {activeSection === "tasks" && <TaskManager />}
        {activeSection === "calendar" && <TaskCalendar />}
        {activeSection === "progress" && <ProgressOverview />}
        {activeSection === "settings" && <UserSettings />}
      </main>
    </div>
  );
}

export default App;
