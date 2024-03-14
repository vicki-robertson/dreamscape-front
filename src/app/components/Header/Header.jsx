"use client"
import Logo from "@/app/components/ui/Logo";
import SearchBar from "../ui/SearchBar";
import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";
import LogoutButton from "../ui/LogoutButton";
import { useState, useEffect } from "react";

export default function Header({ onSearch, showSearchBar }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
      const token = localStorage.getItem("auth_token"); 
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);


    return (
        <>
            <header className="flex mobile:flex-col mobile:items-center mobile:pt-[21px] desktop:flex-row desktop:justify-between desktop:mx-[70px] desktop:border-b-2 border-blue">
                <Logo/>
                <li className="mobile:pt-4 list-none desktop:flex pb-4 gap-3">
                    {showSearchBar && <SearchBar onSearch={onSearch}/>}
                    <div className="mobile:hidden desktop:flex gap-3">
                        <HomeButton />
                         {!isLoggedIn && <LoginButton />}  
                        {isLoggedIn && <LogoutButton />} 
                    </div>
                </li>
            </header>
       </>        
    )
}