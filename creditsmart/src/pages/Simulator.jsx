import React, { useState } from "react";
import credits from "../data/creditsData";
import "../styles/Simulator.css";

export default function Simulator() {
  const [creditId, setCreditId] = useState(credits[0].id);
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState(null);

  const selected = credits.find((c) => c.id === Number(creditId));

  function calculate() {
    const i = selected.interestRate / 100;
    const cuota = i === 0
      ? amount / months
      : (amount * i) / (1 - Math.pow(1 + i, -months));

    setResult(cuota.toFixed(0));
  }

  return (
    <div className="sim-wrapper">

      {/* Formulario + resultado */}
      <div className="sim-top">

        <div className="sim-form-card">
          <h1>Simulador de Crédito</h1>
          <p className="sim-sub">Consulta cuotas y tasas en segundos</p>

          <div className="input-group">
            <label>Tipo de crédito</label>
            <select value={creditId} onChange={(e) => setCreditId(e.target.value)}>
              {credits.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Monto</label>
            <input type="number" value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} />
          </div>

          <div className="input-group">
            <label>Plazo (meses)</label>
            <input type="number" value={months} 
              onChange={(e) => setMonths(Number(e.target.value))} />
          </div>

          <button className="btn-sim" onClick={calculate}>
            Calcular cuota
          </button>
        </div>

        <div className="sim-result-card">
          {result ? (
            <>
              <h2>Cuota mensual</h2>
              <p className="sim-cuota">${Number(result).toLocaleString()}</p>
              <p className="sim-info">Tasa: {selected.interestRate}% mensual</p>
              <p className="sim-info">Crédito: <strong>{selected.name}</strong></p>
            </>
          ) : (
            <p className="sim-placeholder">Ingresa los datos para calcular tu crédito</p>
          )}
        </div>

      </div>

      {/* Tarjetas de créditos */}
      <h2 className="title-programas">Programas disponibles</h2>
      <div className="sim-cards">
        {credits.map((c) => (
          <div className="credit-card" key={c.id}>
            <img src={c.icon} alt={c.name} className="credit-icon" />
            <h3>{c.name}</h3>

            <div className="credit-info">
              <p><span>Tasa:</span> {c.interestRate}% mensual</p>
              <p><span>Monto:</span> ${c.minAmount.toLocaleString()} - ${c.maxAmount.toLocaleString()}</p>
              <p><span>Plazo:</span> hasta {c.maxTerm} meses</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
