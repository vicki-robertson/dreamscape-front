"use client"

import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      password: ""
    });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register", formData);
      setMessage(response.data.message);
      console.log(message)
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col w-[370px] h-[487px] rounded-2xl border-4 items-center border-light-yellow">
      <h2 className="text-m text-red font-bold pt-3">Registro de usuario</h2>
      <form onSubmit={handleSubmit} className="border-t-2 border-red flex flex-col">
        <label htmlFor="name" className="text-blue text-s font-bold pb-1 pt-6">
          Nombre
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu nombre..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="text-blue text-s font-bold pb-1 pt-6">
          Email
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="text-blue text-s font-bold pb-1 pt-6">
          Contraseña
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu contraseña..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="flex gap-4 justify-center pt-8">
          <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel}/>
        </div>
      </form>
    </div>
  );
}