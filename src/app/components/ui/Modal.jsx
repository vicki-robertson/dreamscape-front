import React from 'react';
import Button from './Button';
import {handleCancel} from '../Forms/LoginForm';

export default function Modal() {
  return (
    <section className='w-80 h-[225px] desktop:h-[200px] desktop:w-[500px] bg-light-yellow rounded-3xl flex flex-col items-center justify-center'>
        <h3 className='text-m text-blue w-[200px] desktop:w-80 text-center pb-7'>¿Quieres eliminar este destino?</h3>
        <div>
            <Button buttonColor="bg-green" buttonText="Aceptar" type="submit"/>
            <Button buttonColor='bg-red' buttonText="Cancelar" onClick={handleCancel}/>
        </div>
    </section>
  )
}
