"use client"

import React, {useState} from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import axios from "axios";

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: ''
    });
    setLoading(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex flex-col w-[370px] h-[487px] rounded-2xl border-4 items-center border-light-yellow ">
      <h2 className="text-m text-red font-bold pt-3 ">Registro de usuario</h2>
      <form onSubmit={handleSubmit} className="border-t-2 border-red flex flex-col">
        <label htmlFor='name' className='text-blue text-s font-bold pb-1 pt-6'>Nombre</label>
        <InputBox size='m' placeholder="Escribe tu nombre..." onChange={handleChange} type="name" name="name"/> 
       
        <label htmlFor="email" className="text-blue text-s font-bold pb-1 pt-6" >
          Email
        </label>
        <InputBox size="m" placeholder="Escribe tu email..." onChange={handleChange} type="email" name="email" />

        <label htmlFor="password" className="text-blue text-s font-bold pb-1 pt-6">
          Contraseña
        </label>
        <InputBox size="m" placeholder="Escribe tu contraseña..." onChange={handleChange} type="password" name="password" />
      </form>
      <div className="flex gap-4 justify-center pt-8">
          <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel} />
      </div>
      <span className="text-blue font-bold text-s pt-4">¿Ya tienes cuenta? Accede <a href="/login" className="text-green">aquí</a></span>
    </div>
  );
}

export default Register;
