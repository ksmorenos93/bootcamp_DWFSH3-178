// src/hooks/useForm.jsx
"use client";

import { useState, useEffect } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Cargar datos desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setValues(JSON.parse(savedData));
    }
  }, []);

  // Guardar datos en localStorage cada vez que cambian los valores
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(values));
  }, [values]);

  return { values, handleChange };
};
