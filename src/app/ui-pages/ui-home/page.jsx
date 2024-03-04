import NavbarMobile from "@/app/components/Header/NavbarMobile";
import Header from "@/app/components/Header/Header";
import Modal from "@/app/components/ui/Modal";
import PaginationButtons from "@/app/components/ui/PaginationButtons";
import Button from "@/app/components/ui/Button";
import Login from "@/app/login/page";

export default function Home() {
    return (
        <>
            <Header/>
            <NavbarMobile />
            <LoginForm/>
            <InputBox size />
            <Button buttonColor="bg-blue"/>
        </>
    )
}