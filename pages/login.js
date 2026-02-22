import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "admin" && pass === "1234") {
      router.push("/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login CondoFácil</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Usuario" onChange={(e)=>setUser(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Contraseña" onChange={(e)=>setPass(e.target.value)} /><br/><br/>
        <button>Ingresar</button>
      </form>
    </div>
  );
}