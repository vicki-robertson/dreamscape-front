import React from 'react'
import InputBox from '../ui/InputBox'
import DoubleButton from '../ui/DoubleButton'

export default function LoginForm() {
  return (
    <div className='flex flex-col w-[370px] h-[358px] rounded-2xl border-4 items-center border-light-yellow '>
      <h2 className='text-m text-red font-bold pt-3 '>Accesso de usuario</h2>
      <form action='' className='border-t-2 border-red flex flex-col'>
       <label for='email' className='text-blue text-s font-bold pb-1 pt-6'>Email</label>
       <InputBox size='m' placeholder="Escribe tu email..."/> 
       <label for='password' className='text-blue text-s font-bold pb-1 pt-6'>Email</label>
       <InputBox size='m' placeholder="Escribe tu contraseña..."/> 
       <div className='flex flex-row justify-center pt-[30px]'>
          <DoubleButton/>
       </div>
      </form>
    </div>
  )
}
