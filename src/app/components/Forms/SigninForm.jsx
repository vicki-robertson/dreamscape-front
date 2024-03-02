import React from "react";
import InputBox from "../ui/InputBox";
import DoubleButton from "../ui/DoubleButton";

export default function SigninForm() {
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
