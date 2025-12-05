import React, { useState } from "react";
import credits from "../data/creditsData";
import "../styles/Apply.css";

export default function Apply() {
  const [form, setForm] = useState({
    cedula: "",
    nombre: "",
    celular: "",
    monto: "",
    tiempo: "12 meses",
    ingresos: "",
    tipo: credits[0].name,
    email: ""
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!/^\d{6,10}$/.test(form.cedula)) e.cedula = "Cédula inválida (6-10 dígitos).";
    if (form.nombre.trim().length < 3) e.nombre = "Nombre muy corto.";
    if (!/^\d{7,10}$/.test(form.celular)) e.celular = "Teléfono inválido.";
    if (Number(form.monto) <= 0) e.monto = "Monto debe ser mayor a 0.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email inválido.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // aquí enviarías a tu backend o localStorage
    alert("Solicitud enviada ✅\nRevisa tu correo (simulado).");
    setForm({
      cedula: "",
      nombre: "",
      celular: "",
      monto: "",
      tiempo: "12 meses",
      ingresos: "",
      tipo: credits[0].name,
      email: ""
    });
    setErrors({});
  }

  return (
    <div className="container">
      <header>
        <h1>Solicitar Crédito</h1>
        <p>Completa el siguiente formulario para iniciar tu solicitud</p>
      </header>

      <main className="card" style={{maxWidth:520, margin:"30px auto"}}>
        <label>Número de Cédula</label>
        <input name="cedula" value={form.cedula} onChange={handleChange} placeholder="Ej: 1234567890" />
        {errors.cedula && <small style={{color:"crimson"}}>{errors.cedula}</small>}

        <label>Nombres y Apellidos</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" />
        {errors.nombre && <small style={{color:"crimson"}}>{errors.nombre}</small>}

        <label>Teléfono / Celular</label>
        <input name="celular" value={form.celular} onChange={handleChange} placeholder="Ej: 3000000000" />
        {errors.celular && <small style={{color:"crimson"}}>{errors.celular}</small>}

        <label>Correo</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" />
        {errors.email && <small style={{color:"crimson"}}>{errors.email}</small>}

        <label>Tipo de crédito</label>
        <select name="tipo" value={form.tipo} onChange={handleChange}>
          {credits.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>

        <label>Monto solicitado</label>
        <input name="monto" type="number" value={form.monto} onChange={handleChange} />

        <label>Plazo en meses</label>
        <select name="tiempo" value={form.tiempo} onChange={handleChange}>
          <option>12 meses</option>
          <option>24 meses</option>
          <option>36 meses</option>
          <option>48 meses</option>
        </select>

        <label>Ingresos mensuales</label>
        <input name="ingresos" type="number" value={form.ingresos} onChange={handleChange} />

        <button onClick={handleSubmit}>Enviar Solicitud</button>
      </main>
    </div>
  );
}
