import React, { useState } from "react";
import credits from "../data/creditsData";
import CreditCard from "../components/CreditCard";
import "../styles/Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [amountFilter, setAmountFilter] = useState("all");

  const filtered = credits.filter((c) => {
    const matchName = c.name.toLowerCase().includes(query.toLowerCase());
    let matchAmount = true;
    if (amountFilter === "1") matchAmount = c.maxAmount <= 10000000;
    if (amountFilter === "2") matchAmount = c.maxAmount > 10000000 && c.maxAmount <= 30000000;
    if (amountFilter === "3") matchAmount = c.maxAmount > 30000000;
    return matchName && matchAmount;
  });

  return (
    <>
      <section id="hero">
        <h1>Tu crédito inteligente, rápido y seguro</h1>
        <button onClick={() => window.location.href = "/solicitud"}>Solicitar Ahora</button>
      </section>

      <section id="nuestros-programas">
        <div className="container">
          <h2>Catálogo de Créditos</h2>

          <div style={{margin:"20px 0", display:"flex", gap:12, justifyContent:"center"}}>
            <input
              placeholder="Buscar (vehículo, vivienda...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{padding:10, borderRadius:8, border:"1px solid #bfd7ff"}}
            />
            <select value={amountFilter} onChange={(e) => setAmountFilter(e.target.value)} style={{padding:10, borderRadius:8}}>
              <option value="all">Todos los montos</option>
              <option value="1">$1.000.000 - $10.000.000</option>
              <option value="2">$10.000.000 - $30.000.000</option>
              <option value="3">$30.000.000+</option>
            </select>
          </div>

          <div className="programas">
            {filtered.map((c) => (<CreditCard key={c.id} credit={c} />))}
          </div>
        </div>
      </section>
    </>
  );
}
