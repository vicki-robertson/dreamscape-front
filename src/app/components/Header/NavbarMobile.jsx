"use client"
import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";
import { useState, useEffect } from "react";
import LogoutButton from "../ui/LogoutButton";
import AddButton from "../ui/AddButton";

export default function NavbarMobile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
      const token = localStorage.getItem("auth_token"); 
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-30 desktop:hidden">
      <div className="w-[360px] h-16 inset-0 bg-green opacity-20 rounded-[40px] filter blur-lg absolute" />
      <div className="relative bg-light-yellow rounded-[40px] w-[350px] h-[62px] flex flex-row items-center justify-between px-8">
        <HomeButton/>
        {!isLoggedIn && <LoginButton />}  
        {isLoggedIn && <AddButton />} 
        {isLoggedIn && <LogoutButton />} 
      </div>
    </nav>
  )
}
