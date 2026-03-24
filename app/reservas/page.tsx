"use client";
import { useState } from "react";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [area, setArea] = useState("");

  const agregarReserva = () => {
    if (!fecha || !hora || !area) {
      alert("Completa todos los campos");
      return;
    }

    const nueva = { fecha, hora, area };
    setReservas([...reservas, nueva]);

    setFecha("");
    setHora("");
    setArea("");
  };

  return (
    <div>
      <h1>Módulo de Reservas</h1>

      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

      <select value={area} onChange={(e) => setArea(e.target.value)}>
        <option value="">Selecciona área</option>
        <option value="Piscina">Piscina</option>
        <option value="Salón">Salón</option>
      </select>

      <button onClick={agregarReserva}>Reservar</button>

      <h2>Reservas</h2>
      {reservas.map((r, i) => (
        <div key={i}>
          {r.fecha} - {r.hora} - {r.area}
        </div>
      ))}
    </div>
  );
}