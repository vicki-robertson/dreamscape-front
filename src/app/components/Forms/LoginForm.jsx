"use client"

import React, { useState } from 'react';
import InputBox from '../ui/InputBox';
import axios from 'axios';
import Button from '../ui/Button';

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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);
      console.log(response.data);

      if (response.status === 200) {
        setMessage(response.data.message);
        console.log('Form submitted!')
      }
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
    }
  };

  return (
    <div className='flex flex-col w-[370px] min-h-[358px] rounded-2xl border-4 items-center border-light-yellow pb-12'>
      <h2 className='text-m text-red font-bold pt-3 '>Acceso de usuario</h2>
      <form onSubmit={handleSubmit} className='border-t-2 border-red flex flex-col'>
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
          {response.data.message && <LoginModal />}

          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel} />
        </div>
      </form>
    </div>
  )
}