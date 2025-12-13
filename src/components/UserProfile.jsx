import React from "react";
import {
  User,
  GraduationCap,
  Star,
  CheckCircle2,
  BookOpen
} from "lucide-react";

export default function UserProfile() {
  return (
    <section className="p-6 max-w-6xl mx-auto">

      {/* Header del perfil */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-8">

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
            R
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Rodriguez
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Estudiante de Ingeniería de Software · Desarrollador Web
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
              <ProfileStat label="Cursos" value="8" />
              <ProfileStat label="Tareas" value="42" />
              <ProfileStat label="Progreso" value="68%" />
            </div>
          </div>

        </div>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Columna izquierda */}
        <div className="lg:col-span-2 space-y-8">

          {/* Sobre mí */}
          <ProfileCard title="Sobre mí" icon={<User className="w-5 h-5" />}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Soy desarrollador web en formación con enfoque en React, diseño de
              interfaces y construcción de aplicaciones modernas orientadas a
              productos digitales.
            </p>
          </ProfileCard>

          {/* Cursos */}
          <ProfileCard
            title="Cursos Destacados"
            icon={<BookOpen className="w-5 h-5" />}
          >
            <CourseItem title="React Básico" progress={80} />
            <CourseItem title="Diseño UI/UX" progress={65} />
            <CourseItem title="JavaScript Avanzado" progress={40} />
          </ProfileCard>

          {/* Actividad reciente */}
          <ProfileCard
            title="Actividad Reciente"
            icon={<CheckCircle2 className="w-5 h-5" />}
          >
            <ActivityItem text="Completó el módulo de Hooks en React" />
            <ActivityItem text="Finalizó la tarea: Diseño del Dashboard" />
            <ActivityItem text="Inició el curso de UI/UX" />
          </ProfileCard>

        </div>

        {/* Columna derecha */}
        <div className="space-y-8">

          {/* Habilidades */}
          <ProfileCard
            title="Habilidades"
            icon={<Star className="w-5 h-5" />}
          >
            <div className="flex flex-wrap gap-2">
              <SkillBadge text="React" />
              <SkillBadge text="JavaScript" />
              <SkillBadge text="UI/UX" />
              <SkillBadge text="Tailwind CSS" />
              <SkillBadge text="Git" />
            </div>
          </ProfileCard>

          {/* Nivel */}
          <ProfileCard
            title="Nivel Académico"
            icon={<GraduationCap className="w-5 h-5" />}
          >
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Intermedio
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Basado en cursos completados y constancia.
            </p>
          </ProfileCard>

        </div>
      </div>

    </section>
  );
}

/* ===================== */
/* COMPONENTES INTERNOS */
/* ===================== */

function ProfileStat({ label, value }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 text-center">
      <p className="text-lg font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      <span className="text-xs text-gray-600 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}

function ProfileCard({ title, icon, children }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SkillBadge({ text }) {
  return (
    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
      {text}
    </span>
  );
}

function CourseItem({ title, progress }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {title}
        </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function ActivityItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
      <CheckCircle2 className="w-4 h-4 text-green-600" />
      <span>{text}</span>
    </div>
  );
}
