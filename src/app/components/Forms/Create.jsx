"use client"

import React, { useState} from 'react';
import InputBox from '../ui/InputBox';
import DoubleButton from '../ui/DoubleButton';
import axios from 'axios';

const CreateDestination = () => {
return (
    <section className='flex items-center justify-center pt-[144px] pb-[171px] desktop:pt-[150px] desktop:pb-[251px]'>
    <div className='flex flex-row w-[733px] h-[509px] rounded-2xl border-4 border-light-yellow '>
    <div class=" items-center w-[300px] basis-1/2 ">
        <h2 className='text-m text-red font-bold pt-3 '>Crear destino</h2>
        <form /*onSubmit*/ className='border-t-2 border-red flex flex-col'>
       <label for='titulo' className='text-blue text-s font-bold pb-1 pt-6'>Titulo</label>
       <InputBox size='m' placeholder="Escribe titulo..." type="text" name="titulo" /*value={formData.email} onChange={handleChange}*//> 
       <label for='Ubicación' className='text-blue text-s font-bold pb-1 pt-6'>Ubicación</label>
       <InputBox size='m' placeholder="Escribe ubicación..." type="text" name="Ubicación" /*value={formData.password} onChange={handleChange}*/ /> 
       <label for='Image' className='text-blue text-s font-bold pb-1 pt-6 mt-4'>Imagen</label>
       <InputBox size='m' className={'mb-8 content=""'} placeholder="Sube una imagen ..." type="file" id='image' accept="image/*" name="Image" /*value={formData.password} onChange={handleChange}*/ /> 
        <DoubleButton/>
    </form>
    </div>
          <div class="basis-1/2 items-center w-[300px] mt-20">
          <label for='razon' className='text-blue text-s font-bold pb-1 pt-6'>¿Por qué quieres viajar allí?</label>
       <InputBox size='xl' placeholder="La explicación del porque quieres viajar allí antes  de 500 caracteres." id="razon" type="text" name="razon" /*value={formData.password} onChange={handleChange}*/ /> 
          </div>
    </div>
        </section>
)
}

export default CreateDestination;
