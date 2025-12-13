import React from "react";
import {
  Bell,
  CheckCircle2,
  BookOpen,
  AlertCircle,
  Clock
} from "lucide-react";

export default function Notifications() {
  return (
    <section className="p-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
          <Bell className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Notificaciones
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Mantente al día con tu actividad reciente
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Últimas actualizaciones
        </span>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          Marcar todo como leído
        </button>
      </div>

      {/* Lista de notificaciones */}
      <div className="space-y-4">

        <NotificationCard
          icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
          title="Tarea completada"
          description="Finalizaste la tarea: Diseño del Dashboard."
          time="Hace 10 minutos"
          unread
        />

        <NotificationCard
          icon={<BookOpen className="w-5 h-5 text-blue-600" />}
          title="Nuevo curso disponible"
          description="Se agregó el curso: JavaScript Avanzado."
          time="Hace 2 horas"
          unread
        />

        <NotificationCard
          icon={<AlertCircle className="w-5 h-5 text-yellow-500" />}
          title="Tarea pendiente"
          description="Tienes una tarea próxima a vencer mañana."
          time="Ayer"
        />

        <NotificationCard
          icon={<Clock className="w-5 h-5 text-purple-600" />}
          title="Constancia semanal"
          description="Has estudiado 5 días consecutivos. ¡Buen trabajo!"
          time="Hace 3 días"
        />

      </div>

    </section>
  );
}

/* ===================== */
/* COMPONENTE INTERNO */
/* ===================== */

function NotificationCard({ icon, title, description, time, unread }) {
  return (
    <div
      className={`flex gap-4 p-5 rounded-2xl border transition ${
        unread
          ? "bg-blue-50 border-blue-200"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="mt-1">{icon}</div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          {unread && (
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {description}
        </p>

        <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 inline-block">
          {time}
        </span>
      </div>
    </div>
  );
}
