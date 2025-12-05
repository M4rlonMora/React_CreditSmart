import React from "react";
import "../styles/CreditCard.css"; // pequeño CSS específico (abajo lo incluyo)

export default function CreditCard({ credit }) {
  const format = (v) => v.toLocaleString("es-CO");
  return (
    <div className="carta card-credit">
      <img src={credit.icon} alt={credit.name} />
      <h3>{credit.name}</h3>
      <p>Tasa: {credit.interestRate}% mensual</p>
      <p>Monto: ${format(credit.minAmount)} - ${format(credit.maxAmount)}</p>
      <p>Plazo máximo: {credit.maxTerm} meses</p>
      <button>Ver Detalles</button>
    </div>
  );
}
