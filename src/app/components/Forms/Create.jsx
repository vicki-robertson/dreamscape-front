"use client";

import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";

const CreateDestination = () => {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    image: "",
    reason: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    destination: "",
    image: "",
    reason: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      destination: "",
      image: "",
      reason: "",
    }); 
  };

 
      // const response = await apiService.register(formData);
  //     setMessage(response.message);
  //     setShowModal(true);
  //   } catch (error) {
  //     if (error.response && error.response.data.errors) {
  //       const errorData = error.response.data.errors;
  //       setErrors({
  //         title: errorData.title ? errorData.title : "",
  //         destination: errorData.destination ? errorData.destination : "",
  //         image: errorData.image ? errorData.image : "",
  //         reason: errorData.reason ? errorData.reason : "",
  //       });
  //     } else {
  //       setMessage("Error: " + error.response.data.message);
  //     }
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    try {
      const formData = new FormData();
      formData.append('title', formData.title);
      formData.append('destination', formData.destination);
      formData.append('reason', formData.reason);
      formData.append('image', formData.image); 
  
      const response = await destinationService.createDestination(formData);
      console.log("API response:", response);
      setMessage(response.message);
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage("Error: " + error.response.data.message);
      } else {
        setMessage("Error desconocido");
      }
    }
  };
//Modal goes here when created

  return (
    <section className="flex items-center justify-center mobile:pt-2 pb-[171px] desktop:pt-[150px] desktop:pb-[251px]">
      <div className="flex mobile:flex-col desktop:flex-row desktop:w-[733px] h-[509px] rounded-2xl border-4 border-light-yellow p-6">
        <div className="items-center p-4">
          <h2 className="text-m text-red font-bold pt-3 text-center">Crear destino</h2>
          <form
            onSubmit={handleSubmit}
            className="border-t-2 border-red flex flex-col"
          >
            <label htmlFor="title" className="text-blue text-s font-bold pb-1 pt-6">
              Titulo
            </label>
            <InputBox
              size="m"
              placeholder="Escribe titulo..."
              type="text"
              name="title"
            />
            <label
              htmlFor="destination"
              className="text-blue text-s font-bold pb-1 pt-6"
            >
              Ubicación
            </label>
            <InputBox
              size="m"
              placeholder="Escribe ubicación..."
              type="text"
              name="destination"
            />
            <label
              htmlFor="Image"
              className="text-blue text-s font-bold pb-1 pt-6 mt-4"
            >
              Imagen
            </label>
            <InputBox
              size="m"
              className="mb-8" 
              placeholder="Sube una imagen..."
              type="file"
              id="image"
              accept="image/*"
              name="Image"
            />
            <div className="desktop:flex flex-row gap-3 mobile:hidden">
            <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
            <Button
              buttonColor="bg-red"
              buttonText="Cancelar"
              onClick={handleCancel}
            />
             </div>
          </form>
        </div>
        <div className="basis-1/2 items-center desktop:w-[300px] mt-20">
          <label htmlFor="reason" className="text-blue text-s font-bold pb-1 pt-6">
            ¿Por qué quieres viajar allí?
          </label>
          <textarea
              className="bg-light-yellow rounded-[20px] shadow-[inset_0px_4px_4px_#00000040] placeholder-[blue] text-s pl-4 focus:outline-none focus:border-[blue] focus:ring-1 focus:ring-[blue] invalid:border-[red] invalid:text-[red] focus:invalid:border-[red] focus:invalid:ring-[red] w-[300px] h-[370px]"
              placeholder="Escribe porque quieres viajar a este lugar..."
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />
            <div className="desktop:hidden mobile:flex flex-row gap-3">
            <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
            <Button
              buttonColor="bg-red"
              buttonText="Cancelar"
              onClick={handleCancel}
            />
             </div>
        </div>
      </div>
    </section>
  );
};

export default CreateDestination;
