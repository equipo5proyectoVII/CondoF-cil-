"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CurrentUser = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  unidad?: string;
};

const LS_CURRENT_USER = "currentUser";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);

  const navItems = useMemo(
    () => [
      {
        href: "/payments/register",
        title: "Registrar pagos de residentes",
        description: "Captura pagos, método, periodo y comprobante.",
        icon: "🧾",
      },
      {
        href: "/payments/history",
        title: "Historial de pagos",
        description: "Consulta movimientos por fecha, residente y estatus.",
        icon: "📚",
      },
      {
        href: "/resident/statement",
        title: "Estado de cuenta del residente",
        description: "Saldo, adeudos, pagos aplicados y periodos.",
        icon: "💳",
      },
    ],
    []
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_CURRENT_USER);
      if (!raw) {
        router.replace("/login");
        return;
      }
      setUser(JSON.parse(raw));
    } catch {
      router.replace("/login");
    }
  }, [router]);

  function logout() {
    localStorage.removeItem(LS_CURRENT_USER);
    router.push("/login");
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 grid place-items-center p-6">
        <p className="text-gray-600">Cargando sesión...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800">CondoFácil</h1>
            <p className="text-sm text-gray-600">
              Bienvenido, <span className="font-medium">{user.nombre}</span>{" "}
              <span className="text-gray-400">({user.rol})</span>
            </p>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Panel</h2>
              <p className="text-gray-600 mt-1">
                Elige una opción para comenzar.
              </p>
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-800">Tu sesión</p>
              <p>{user.email}</p>
              {user.unidad ? <p>Unidad: {user.unidad}</p> : null}
            </div>
          </div>

          {/* Nav Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border rounded-2xl p-5 hover:shadow-md transition bg-white"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick menu */}
          <div className="mt-8 border-t pt-6">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Navegación rápida
            </p>
            <nav className="flex flex-col sm:flex-row gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href + "-quick"}
                  href={item.href}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}