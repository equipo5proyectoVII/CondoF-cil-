export default function IncidenciasPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-2xl font-bold text-gray-800">
          Reporte de incidencias
        </h1>

        <p className="text-gray-600 mt-2">
          En esta sección los residentes pueden reportar problemas dentro del
          condominio como fallas en áreas comunes o mantenimiento.
        </p>

        <form className="mt-6 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título del problema
            </label>
            <input
              type="text"
              className="mt-1 w-full border rounded-lg p-2"
              placeholder="Ej: Luz dañada en estacionamiento"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              className="mt-1 w-full border rounded-lg p-2"
              rows={4}
              placeholder="Describe el problema..."
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Enviar reporte
          </button>

        </form>

        <p className="text-sm text-gray-500 mt-4">
          *Módulo en desarrollo - Sprint 3
        </p>

      </div>
    </main>
  );
}