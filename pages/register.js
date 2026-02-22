import { useState } from "react";

export default function Register() {
  const [msg,setMsg]=useState("");

  const handleRegister = (e)=>{
    e.preventDefault();
    setMsg("Usuario registrado correctamente (demo)");
  };

  return(
    <div style={{padding:40}}>
      <h2>Registro CondoFácil</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Nombre"/><br/><br/>
        <input placeholder="Correo"/><br/><br/>
        <input type="password" placeholder="Contraseña"/><br/><br/>
        <button>Registrar</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}