import React from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  Palette,
  ShieldCheck
} from "lucide-react";

export default function UserSettings() {
  return (
    <section className="p-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Configuración del Usuario
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Administra tu perfil y preferencias de la plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Perfil */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center text-center">

          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold mb-4">
            R
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Rodriguez
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Estudiante / Desarrollador Web
          </p>

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm transition">
            Cambiar foto
          </button>
        </div>

        {/* Ajustes */}
        <div className="lg:col-span-2 space-y-8">

          {/* Información personal */}
          <SettingsCard
            title="Información Personal"
            icon={<User className="w-5 h-5" />}
          >
            <Input label="Nombre completo" placeholder="Rodriguez" />
            <Input label="Correo electrónico" placeholder="correo@ejemplo.com" icon={<Mail />} />
          </SettingsCard>

          {/* Preferencias */}
          <SettingsCard
            title="Preferencias"
            icon={<Palette className="w-5 h-5" />}
          >
            <Toggle label="Modo oscuro" />
            <Toggle label="Mostrar progreso avanzado" />
          </SettingsCard>

          {/* Notificaciones */}
          <SettingsCard
            title="Notificaciones"
            icon={<Bell className="w-5 h-5" />}
          >
            <Toggle label="Notificaciones por correo" />
            <Toggle label="Recordatorios de tareas" />
          </SettingsCard>

          {/* Seguridad */}
          <SettingsCard
            title="Seguridad"
            icon={<ShieldCheck className="w-5 h-5" />}
          >
            <Input label="Contraseña actual" type="password" icon={<Lock />} />
            <Input label="Nueva contraseña" type="password" icon={<Lock />} />
          </SettingsCard>

          {/* Acciones */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Cancelar
            </button>

            <button className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition">
              Guardar cambios
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

/* ===================== */
/* COMPONENTES INTERNOS */
/* ===================== */

function SettingsCard({ title, icon, children }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function Input({ label, type = "text", placeholder, icon }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            icon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
}

function Toggle({ label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {label}
      </span>
      <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer">
        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow" />
      </div>
    </div>
  );
}
