import Logo from "@/app/components/ui/Logo";
import SearchBar from "../ui/SearchBar";
import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";
import LogoutButton from "../ui/LogoutButton";

export default function Header({ onSearch, showSearchBar }) {
    return (
        <>
            <header className="flex mobile:flex-col mobile:items-center mobile:pt-[21px] desktop:flex-row desktop:justify-between desktop:mx-[70px] desktop:border-b-2 border-blue">
                <Logo/>
                <li className="mobile:pt-4 list-none desktop:flex pb-4">
                    {showSearchBar && <SearchBar onSearch={onSearch}/>}
                    <div className="mobile:hidden desktop:flex gap-4 pl-4">
                        <HomeButton />
                        <LoginButton /> 
                        <LogoutButton />
                    </div>
                </li>
            </header>
       </>        
    )
}
