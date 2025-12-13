import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function TaskCalendar() {
  return (
    <section className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Calendario de Tareas
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Visualiza y organiza tus actividades por fecha.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-semibold text-gray-900 dark:text-white">
            Agosto 2025
          </span>

          <button className="p-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Calendario */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

          {/* Días de la semana */}
          <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mié</span>
            <span>Jue</span>
            <span>Vie</span>
            <span>Sáb</span>
            <span>Dom</span>
          </div>

          {/* Grid de días */}
          <div className="grid grid-cols-7 gap-3">

            {Array.from({ length: 30 }).map((_, i) => (
              <DayCell
                key={i}
                day={i + 1}
                hasTask={i === 3 || i === 7 || i === 15}
                active={i === 7}
              />
            ))}

          </div>
        </div>

        {/* Panel lateral */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Tareas del día
          </h3>

          <div className="space-y-4">

            <TaskItem
              title="Finalizar proyecto React"
              time="10:00 AM"
              completed={false}
            />

            <TaskItem
              title="Revisar documentación"
              time="2:00 PM"
              completed={true}
            />

          </div>
        </div>

      </div>

    </section>
  );
}

/* ===================== */
/* COMPONENTES INTERNOS */
/* ===================== */

function DayCell({ day, hasTask, active }) {
  return (
    <div
      className={`
        h-20 rounded-xl border flex flex-col p-2 cursor-pointer transition
        ${active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
      `}
    >
      <span className="text-sm font-semibold">{day}</span>

      {hasTask && (
        <span
          className={`mt-auto w-2 h-2 rounded-full ${
            active ? "bg-white" : "bg-blue-600"
          }`}
        />
      )}
    </div>
  );
}

function TaskItem({ title, time, completed }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700">

      {completed ? (
        <CheckCircle2 className="w-5 h-5 text-green-600" />
      ) : (
        <Clock className="w-5 h-5 text-blue-600" />
      )}

      <div>
        <p className="font-medium text-gray-900 dark:text-white">
          {title}
        </p>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {time}
        </span>
      </div>
    </div>
  );
}
