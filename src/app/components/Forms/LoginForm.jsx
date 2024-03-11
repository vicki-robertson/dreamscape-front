"use client"

import React, { useState } from 'react';
import InputBox from '../ui/InputBox';
import Button from '../ui/Button';
import {handleSubmit} from '../../services/login'
import LoginModal from "../ui/LoginModal";

export default function StartSession() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCancel = () => {
    setFormData({
      email: '',
      password: ''
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e, formData, setMessage, setErrors, setShowModal);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        setErrors({
          email: errorData.email ? errorData.email : "",
          password: errorData.password ? errorData.password : ""
        });
      } else {
        setMessage("Error: " + error.response.data.message);
      }
    }}

  const handleModalClose = () => {
    setShowModal(false);
  };



  return (
    <div className='flex flex-col w-[370px] min-h-[358px] rounded-2xl border-4 items-center border-light-yellow pb-12'>
      <h2 className='text-m text-red font-bold pt-3 '>Acceso de usuario</h2>
      <form onSubmit={(e) => handleSubmit(e, formData, setMessage, setErrors, setShowModal)} className='border-t-2 border-red flex flex-col'>
        <label htmlFor='email' className='text-blue text-s font-bold pb-1 pt-6'>Email</label>
        <InputBox
          size='m'
          placeholder="Escribe tu email..."
          name="email"
          value={formData.email}
          onChange={handleChange} />
        {errors.email && <p className="text-red">{errors.email}</p>}
        <label htmlFor='password' className='text-blue text-s font-bold pb-1 pt-6'>Contraseña</label>
        <InputBox
          size='m'
          placeholder="Escribe tu contraseña..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />
        {errors.password && <p className="text-red">{errors.password}</p>}
        <div className='flex flex-row justify-center pt-[30px] gap-4'>
          <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />

          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel} />
        </div>
      </form>
      {showModal && <LoginModal message={message} onClose={handleModalClose} />}
    </div>
  )
}