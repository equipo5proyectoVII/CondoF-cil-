"use client";
import { useState } from "react";

export default function Comunicados() {
  const [mensaje, setMensaje] = useState("");
  const [avisos, setAvisos] = useState([]);

  const agregarAviso = (e) => {
    e.preventDefault();

    if (mensaje === "") {
      alert("Escribe algo primero");
      return;
    }

    const nuevoAviso = {
      id: Date.now(),
      texto: mensaje
    };

    setAvisos([...avisos, nuevoAviso]);
    setMensaje("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Comunicados</h1>

      <form onSubmit={agregarAviso}>
        <textarea
          placeholder="Escribe un aviso..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          style={{ width: "100%", height: "80px" }}
        />
        <br />
        <button type="submit">Publicar</button>
      </form>

      <hr />

      <h2>Lista de avisos</h2>

      {avisos.length === 0 ? (
        <p>No hay avisos todavía</p>
      ) : (
        avisos.map((a) => (
          <p key={a.id}>- {a.texto}</p>
        ))
      )}
    </div>
  );
}