import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import LoginModal from "../ui/LoginModal";
import { authService } from "../../services/authService";


export default function RegisterForm({ router }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  
  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(formData);
      const token = response.token;
      localStorage.setItem("auth_token", token);
      setMessage(response.message);
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        setErrors({
          name: errorData.name ? errorData.name : "",
          email: errorData.email ? errorData.email : "",
          password: errorData.password ? errorData.password : ""
        });
      } else {
        setMessage("Error: " + error.response.data.message);
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <div id="register-form" className="flex flex-col w-[370px] min-h-[487px] rounded-2xl border-4 items-center border-light-yellow pb-14">
      <h2 className="text-m text-red font-bold pt-3">Registro de usuario</h2>
      <form onSubmit={handleSubmit} className="border-t-2 border-red flex flex-col">
        <label htmlFor="name" className="text-blue text-s font-bold pb-1 pt-6">
          Nombre
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu nombre..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red">{errors.name}</p>}

        <label htmlFor="email" className="text-blue text-s font-bold pb-1 pt-6">
          Email
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red">{errors.email}</p>}

        <label htmlFor="password" className="text-blue text-s font-bold pb-1 pt-6">
          Contraseña
        </label>
        <InputBox
          size="m"
          placeholder="Escribe tu contraseña..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red">{errors.password}</p>}

        <div className="flex gap-4 justify-center pt-8">
          <Button buttonColor="bg-green" buttonText="Aceptar" type="submit" />
          <Button buttonColor="bg-red" buttonText="Cancelar" onClick={handleCancel} />
        </div>
        <br />
        <span className="text-blue text-center text-s font-bold">
          ¿Ya tienes cuenta? Accede <a href="/login" className="text-green">aquí</a>
        </span>
      </form>
      {showModal && <LoginModal message={message} onClose={handleModalClose} />}
    </div>
  );
}