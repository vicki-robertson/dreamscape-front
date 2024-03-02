import NavbarMobile from "@/app/components/Header/NavbarMobile";
import Header from "@/app/components/Header/Header";
import Modal from "@/app/components/ui/Modal";

export default function Home() {
    return (
        <>
            <Header/>
            <NavbarMobile />
            <div className="flex flex-row justify-center">
                <Modal/>
            </div>
        </>
    )
}