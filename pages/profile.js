import { useRouter } from "next/router";

export default function Profile(){
  const router = useRouter();

  return(
    <div style={{padding:40}}>
      <h2>Panel CondoFácil</h2>
      <p>Bienvenido al sistema.</p>
      <p>Rol: Administrador</p>

      <br/>

      <button onClick={()=>router.push("/payments")}>
        Ir a Cobranza
      </button>

      <br/><br/>

      <button onClick={()=>router.push("/history")}>
        Ver Historial
      </button>
    </div>
  );
}