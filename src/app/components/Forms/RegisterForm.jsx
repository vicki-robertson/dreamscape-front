"use client"


import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import { handleSubmit } from "@/app/services/register";
import LoginModal from "../ui/LoginModal";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };


  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col w-[370px] min-h-[487px] rounded-2xl border-4 items-center border-light-yellow pb-14">
      <h2 className="text-m text-red font-bold pt-3">Registro de usuario</h2>
      <form onSubmit={(e) => handleSubmit(e, formData, setMessage, setErrors, setShowModal)} className="border-t-2 border-red flex flex-col">
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
        {errors.name && <p className="text-red">{errors.name}</p>}


        <label htmlFor="email" className="text-blue text-s font-bold pb-1 pt-6">
          Email
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red">{errors.email}</p>}

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
        {errors.password && <p className="text-red">{errors.password}</p>}

        <div className="flex gap-4 justify-center pt-8">
          <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel}/>
        </div>
        <br></br>
        <span className="text-blue text-center text-s font-bold">¿Ya tienes cuenta? Accede <a href="/login" className="text-green">aquí</a></span>
        </form>
        {showModal && <LoginModal message={message} onClose={handleModalClose} />}
    </div>
  );
}