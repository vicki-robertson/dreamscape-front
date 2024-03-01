import NavbarMobile from "@/app/components/Header/NavbarMobile";
import HomeButton from "@/app/components/ui/HomeButton";
import InputBox from "@/app/components/ui/InputBox";
import LoginButton from "@/app/components/ui/LoginButton";
import Logo from "@/app/components/ui/Logo";
import SearchButton from "@/app/components/ui/SearchButton";


export default function Header() {
    return (
        <div>
            <Logo/>
            <HomeButton/>
            <LoginButton/>
            <SearchButton/>
            <InputBox size="s" placeholder="Search..." />
            <InputBox size="m" placeholder="Escribe tu nombre..." />
            <div className="p-20">
                <NavbarMobile/>
            </div>
        </div>
    )
}