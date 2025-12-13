import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function CourseCard({ title, description, progress }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 w-full max-w-sm transition hover:shadow-lg hover:-translate-y-1">
      
      {/* Icono */}
      <div className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-md mb-5">
        <BookOpen className="w-7 h-7" />
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 mb-4">
        {description}
      </p>

      {/* Progreso */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <span>Progreso</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Botón */}
      <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
        Continuar
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
