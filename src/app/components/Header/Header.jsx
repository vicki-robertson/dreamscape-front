import Logo from "@/app/components/ui/Logo";
import SearchBar from "../ui/SearchBar";
import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";


export default function Header() {
    return (
        <>
            <nav className="flex mobile:flex-col mobile:items-center mobile:pt-[21px] desktop:flex-row desktop:justify-between desktop:mx-[70px]">
                <Logo/>
                <li className="mobile:pt-8 list-none desktop:flex">
                    <SearchBar/>
                    <div className="mobile:hidden desktop:flex gap-4 pl-4">
                        <HomeButton/>
                        <LoginButton/> 
                    </div>
                </li>
            </nav>
       </>        
    )
}