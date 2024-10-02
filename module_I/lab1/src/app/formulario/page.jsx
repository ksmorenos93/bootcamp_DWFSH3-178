// src/app/formulario/page.jsx
"use client";

import React from 'react';
import { useForm } from '../../hooks/useForm';

const FormularioPage = () => {
  const { values, handleChange } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', values);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            value={values.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={values.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioPage;
