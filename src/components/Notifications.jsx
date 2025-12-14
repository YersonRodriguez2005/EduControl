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
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg">
          <Bell className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Notificaciones
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Revisa tu actividad reciente y avisos importantes
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Últimas actualizaciones
        </span>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
          Marcar todo como leído
        </button>
      </div>

      {/* Lista */}
      <div className="space-y-5">

        <NotificationCard
          icon={<CheckCircle2 className="w-6 h-6 text-green-500" />}
          title="Tarea completada"
          description="Finalizaste la tarea: Diseño del Dashboard."
          time="Hace 10 minutos"
          unread
        />

        <NotificationCard
          icon={<BookOpen className="w-6 h-6 text-blue-500" />}
          title="Nuevo curso disponible"
          description="Se agregó el curso: JavaScript Avanzado."
          time="Hace 2 horas"
          unread
        />

        <NotificationCard
          icon={<AlertCircle className="w-6 h-6 text-yellow-500" />}
          title="Tarea pendiente"
          description="Tienes una tarea próxima a vencer mañana."
          time="Ayer"
        />

        <NotificationCard
          icon={<Clock className="w-6 h-6 text-purple-500" />}
          title="Constancia semanal"
          description="Has estudiado 5 días consecutivos. ¡Buen trabajo!"
          time="Hace 3 días"
        />

      </div>
    </section>
  );

  function NotificationCard({ icon, title, description, time, unread }) {
  return (
  <div
    className={`relative flex gap-5 p-6 rounded-2xl transition-all duration-300 ${
      unread
        ? "bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-l-4 border-blue-500 shadow-md"
        : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
    }`}
  >
      {/* Icono */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
        {icon}
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className={`font-semibold ${
            unread
              ? "text-gray-900 dark:text-white"
              : "text-gray-800 dark:text-gray-200"
          }`}>
            {title}
          </h3>

          {unread && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-600 text-white">
              Nuevo
            </span>
          )}
        </div>

        <p className={`text-sm mt-1 ${
          unread
            ? "text-gray-700 dark:text-gray-300"
            : "text-gray-600 dark:text-gray-400"
        }`}>
          {description}
        </p>

        <span className="text-xs text-gray-500 dark:text-gray-400 mt-3 block">
          {time}
        </span>
      </div>
    </div>
  );
}

}
