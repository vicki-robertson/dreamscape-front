import HomeButton from "@/app/components/ui/HomeButton";
import LoginButton from "@/app/components/ui/LoginButton";
import Logo from "@/app/components/ui/Logo";


export default function Header() {
    return (
        <div>
            <Logo/>
            <HomeButton/>
            <LoginButton />
        </div>
    )
}