import React from "react";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Calendar,
  Plus,
  X,
  AlertCircle
} from "lucide-react";

export default function TaskManager() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="p-6 relative">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Gestor de Tareas
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Controla y organiza tus actividades académicas.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" />
          Nueva tarea
        </button>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          icon={<Clock className="w-6 h-6 text-yellow-500" />}
          title="Pendientes"
          value="5"
        />
        <SummaryCard
          icon={<AlertTriangle className="w-6 h-6 text-blue-600" />}
          title="En Progreso"
          value="3"
        />
        <SummaryCard
          icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
          title="Completadas"
          value="12"
        />
      </div>

      {/* Lista de tareas */}
      <div className="space-y-4">
        <TaskCard
          title="Finalizar proyecto React"
          description="Completar componentes principales del dashboard."
          status="progress"
          date="25 Ago 2025"
          priority="Alta"
        />
        <TaskCard
          title="Estudiar UI/UX"
          description="Repasar principios de jerarquía visual."
          status="pending"
          date="28 Ago 2025"
          priority="Media"
        />
        <TaskCard
          title="Enviar documentación"
          description="Subir evidencias al sistema académico."
          status="completed"
          date="20 Ago 2025"
          priority="Baja"
        />
      </div>

      {/* Modal */}
      {openModal && <TaskModal onClose={() => setOpenModal(false)} />}
    </section>
  );
}

/* ===================== */
/* COMPONENTES INTERNOS */
/* ===================== */

function SummaryCard({ icon, title, value }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex items-center gap-4 shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function TaskCard({ title, description, status, date, priority }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    progress: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>

        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}>
          {status === "pending" && "Pendiente"}
          {status === "progress" && "En progreso"}
          {status === "completed" && "Completada"}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <span className="font-medium">Prioridad: {priority}</span>
      </div>
    </div>
  );
}

function TaskModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-full max-w-lg p-6 z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nueva Tarea
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Registra una nueva actividad.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5">
          <Input label="Título de la tarea" placeholder="Ej: Estudiar React" />
          <Textarea label="Descripción" placeholder="Describe la tarea" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="date" label="Fecha límite" icon={<Calendar />} />
            <Select label="Prioridad" icon={<AlertCircle />} />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-gray-300 dark:border-gray-600"
          >
            Cancelar
          </button>
          <button className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold">
            Crear tarea
          </button>
        </div>
      </div>
    </div>
  );
}

/* Inputs reutilizables */

function Input({ label, placeholder, type = "text", icon }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-2.5 w-4 h-4 text-gray-500">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-2 rounded-xl border bg-gray-50 dark:bg-gray-800`}
        />
      </div>
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        rows="3"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl border bg-gray-50 dark:bg-gray-800 resize-none"
      />
    </div>
  );
}

function Select({ label, icon }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-2.5 w-4 h-4 text-gray-500">{icon}</span>
        <select className="w-full pl-10 pr-4 py-2 rounded-xl border bg-gray-50 dark:bg-gray-800">
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </select>
      </div>
    </div>
  );
}
