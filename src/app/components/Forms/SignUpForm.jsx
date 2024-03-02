"use client"

import React, {useState} from "react";
import InputBox from "../ui/InputBox";
import DoubleButton from "../ui/DoubleButton";
import axios from "axios";

const SignUpForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
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
      <form action="" className="border-t-2 border-red flex flex-col">
        <label for='name' className='text-blue text-s font-bold pb-1 pt-6'>Nombre</label>
        <InputBox size='m' placeholder="Escribe tu nombre..."/> 
       
        <label for="email" className="text-blue text-s font-bold pb-1 pt-6">
          Email
        </label>
        <InputBox size="m" placeholder="Escribe tu email..." />

        <label for="password" className="text-blue text-s font-bold pb-1 pt-6">
          Contraseña
        </label>
        <InputBox size="m" placeholder="Escribe tu contraseña..." />
      </form>
      <div className="justify-center pt-8">
        <DoubleButton/>
        <p className="text-blue font-bold text-s pt-4">¿Ya tienes cuenta? Accede <a href="/login" className="text-green">aquí</a></p>
      </div>
    </div>
  );
}

export default SignUpForm;
