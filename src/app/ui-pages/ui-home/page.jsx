import HomeButton from "@/app/components/ui/HomeButton";
import InputBox from "@/app/components/ui/InputBox";
import LoginButton from "@/app/components/ui/LoginButton";
import Logo from "@/app/components/ui/Logo";
import SearchBar from "@/app/components/ui/SearchBar";
import SearchButton from "@/app/components/ui/SearchButton";


export default function Header() {
    return (
        <div>
            <Logo/>
            <HomeButton/>
            <LoginButton/>
            <SearchButton/>
            <InputBox/>
            <SearchBar />
        </div>
    )
}