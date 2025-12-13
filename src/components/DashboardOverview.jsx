import React from "react";
import { BookOpen, CheckSquare, LineChart } from "lucide-react";

export default function DashboardOverview() {
  return (
    <section className="p-6">

      {/* Título principal */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard General
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Resumen de tu actividad reciente y estado de tus cursos.
        </p>
      </div>

      {/* Grid de estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        {/* Card 1 - Cursos activos */}
        <StatCard
          icon={<BookOpen className="w-7 h-7 text-blue-600" />}
          title="Cursos Activos"
          value="6"
          subtitle="Actualmente en progreso"
        />

        {/* Card 2 - Tareas pendientes */}
        <StatCard
          icon={<CheckSquare className="w-7 h-7 text-yellow-500" />}
          title="Tareas Pendientes"
          value="12"
          subtitle="Para completar esta semana"
        />

        {/* Card 3 - Progreso Semanal */}
        <StatCard
          icon={<LineChart className="w-7 h-7 text-green-600" />}
          title="Progreso Semanal"
          value="78%"
          subtitle="Comparado con la semana anterior"
        />

      </div>

      {/* Tarjeta grande de progreso general */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Progreso General de Aprendizaje
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-6">
          Representación visual de tu avance acumulado en todos los cursos.
        </p>

        {/* Barra de progreso grande */}
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
          <div
            className="h-4 bg-blue-600 rounded-full transition-all"
            style={{ width: "65%" }}
          />
        </div>

        <p className="text-right mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          65% Completado
        </p>
      </div>

    </section>
  );
}

/* Componente interno para tarjetas pequeñas */
function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex gap-4 items-center hover:shadow-lg hover:-translate-y-1 transition">

      <div className="w-14 h-14 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h4>

        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>

        <span className="text-xs text-gray-500 dark:text-gray-500">
          {subtitle}
        </span>
      </div>

    </div>
  );
}
