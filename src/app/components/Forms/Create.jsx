"use client";

import React, { useState, useEffect } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
// import LoginModal from "../ui/LoginModal";
import { destinationService } from "../../services/destinationService";



const CreateDestination = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log("Token generado:", storedToken); // Imprimir el token en la consola
      setToken(storedToken);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    reason: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    location: "",
    image: "",
    reason: "",
  });

  const [message, setMessage] = useState("");
  // const [showModal, setShowModal] = useState(false);


  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: "" });
  // };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      location: "",
      image: "",
      reason: "",
    }); 
  };

 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("reason", formData.reason);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("user_id", token);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitting form...");
  //   try {
      // const formData = new FormData();
      // formData.append('title', formData.title);
      // formData.append('destination', formData.destination);
      // formData.append('reason', formData.reason);
      // formData.append('image', formData.image); // Asegúrate de tener la imagen en formData
  
      const response = await destinationService.createDestination(formDataToSend);
      console.log("API response:", response);
      setMessage(response.message);
      setFormData({
        name: "",
        location: "",
        image: "",
        reason: "",
      });
      // setShowModal(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Manejar errores de validación del formulario
        setErrors(error.response.data.errors);
      } else if (error.response && error.response.data && error.response.data.message) {
        // Mostrar mensaje de error de la API
        setMessage("Error: " + error.response.data.message);
      } else {
        // Error desconocido
        setMessage("Error desconocido al enviar el formulario");
      }
    }
  };
  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  return (
    <section className="flex items-center justify-center mobile:pt-2 pb-[171px] desktop:pt-[150px] desktop:pb-[251px]">
      <div className="flex mobile:flex-col desktop:flex-row desktop:w-[733px] h-[509px] rounded-2xl border-4 border-light-yellow p-6">
        <div className="items-center p-4">
          <h2 className="text-m text-red font-bold pt-3 text-center">Crear destino</h2>
          <form
            onSubmit={handleSubmit} 
            className="border-t-2 border-red flex flex-col"
          >
            <label htmlFor="name" className="text-blue text-s font-bold pb-1 pt-6">
              Titulo
            </label>
            <InputBox
              size="m"
              placeholder="Escribe titulo..."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red">{errors.name}</p>}
            <label
              htmlFor="location"
              className="text-blue text-s font-bold pb-1 pt-6"
            >
              Ubicación
            </label>
            <InputBox
              size="m"
              placeholder="Escribe ubicación..."
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            <label
              htmlFor="image"
              className="text-blue text-s font-bold pb-1 pt-6 mt-4"
            >
              Imagen
            </label>
            <InputBox
              size="m"
              className="mb-8" 
              placeholder="Sube una imagen ..."
              type="file"
              id="image"
              accept="image/*"
              name="image"
              onChange={handleChange}
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
      {/* {showModal && <LoginModal message={message} onClose={handleModalClose} />} */}
    </section>
  );
};

export default CreateDestination;
