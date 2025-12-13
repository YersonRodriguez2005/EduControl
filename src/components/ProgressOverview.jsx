import React from "react";
import {
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function ProgressOverview() {
  return (
    <section className="p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Progreso de Aprendizaje
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Análisis detallado de tu desempeño y constancia.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <KpiCard
          icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
          title="Progreso General"
          value="68%"
          subtitle="+5% este mes"
        />

        <KpiCard
          icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
          title="Tareas Completadas"
          value="42"
          subtitle="Total"
        />

        <KpiCard
          icon={<Clock className="w-6 h-6 text-yellow-500" />}
          title="Horas de Estudio"
          value="36h"
          subtitle="Últimas 4 semanas"
        />

        <KpiCard
          icon={<BarChart3 className="w-6 h-6 text-purple-600" />}
          title="Constancia"
          value="Alta"
          subtitle="5 días/semana"
        />

      </div>

      {/* Layout inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Progreso por curso */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Progreso por Curso
          </h3>

          <CourseProgress
            title="React Básico"
            progress={80}
          />

          <CourseProgress
            title="Diseño UI/UX"
            progress={65}
          />

          <CourseProgress
            title="JavaScript Avanzado"
            progress={40}
          />

        </div>

        {/* Actividad semanal */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Actividad Semanal
          </h3>

          <div className="flex items-end justify-between h-40 gap-3">
            <WeekBar day="L" value={60} />
            <WeekBar day="M" value={80} />
            <WeekBar day="M" value={50} />
            <WeekBar day="J" value={90} />
            <WeekBar day="V" value={70} />
            <WeekBar day="S" value={40} />
            <WeekBar day="D" value={20} />
          </div>

        </div>
      </div>

    </section>
  );
}

/* ===================== */
/* COMPONENTES INTERNOS */
/* ===================== */

function KpiCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
          {icon}
        </div>
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h4>
      </div>

      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>

      <span className="text-xs text-gray-500 dark:text-gray-400">
        {subtitle}
      </span>
    </div>
  );
}

function CourseProgress({ title, progress }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {title}
        </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {progress}%
        </span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function WeekBar({ day, value }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-8 bg-gray-300 dark:bg-gray-700 rounded-full h-full flex items-end">
        <div
          className="w-full bg-blue-600 rounded-full"
          style={{ height: `${value}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400">
        {day}
      </span>
    </div>
  );
}
