import HomeButton from "@/app/components/ui/HomeButton";
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
        </div>
    )
}