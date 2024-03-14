"use client";

import Image from "next/image";
import LogoutIcon from "../../../../public/assets/icons/Logout-icon.svg";
import { authService } from "../../services/authService";
import React, { useState } from 'react';

export default function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

 const handleLogout = async () => {
    try {
      await authService.logout();
      setIsLoggedIn(false); 
      window.location.href = '/'; 
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
