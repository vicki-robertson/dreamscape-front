"use client"
import Image from "next/image";
import LogoutIcon from "../../../../public/assets/icons/Logout-icon.svg";
import React, { useState } from 'react';

export default function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const handleLogout = () => {
    try {
      localStorage.removeItem("auth_token"); // Elimina el token del almacenamiento local
      setIsLoggedIn(false); 
      window.location.href = '/'; 

      console.log("Logout successful. Clearing token from localStorage.");
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return isLoggedIn ? (
    <div className="">
      <a href="" onClick={handleLogout}>
        <Image
          className=""
          src={LogoutIcon}
          width={50}
          height={50}
          alt="botón para terminar sesión"
        />
      </a>
    </div>
  ): null;
}