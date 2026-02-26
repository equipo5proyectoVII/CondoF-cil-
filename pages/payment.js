import { useState } from "react";

export default function Payments() {
  const [amount, setAmount] = useState("");
  const [payments, setPayments] = useState([]);

  const handlePayment = (e) => {
    e.preventDefault();

    const newPayment = {
      amount,
      date: new Date().toLocaleDateString()
    };

    setPayments([...payments, newPayment]);
    setAmount("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Módulo de Cobranza</h2>

      <form onSubmit={handlePayment}>
        <input 
          placeholder="Monto"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
        <br/><br/>
        <button>Registrar Pago</button>
      </form>

      <h3>Pagos Registrados:</h3>
      {payments.map((p, i)=>(
        <p key={i}>
          ${p.amount} - {p.date}
        </p>
      ))}
    </div>
  );
}