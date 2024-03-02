import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";

export default function NavbarMobile() {
  return (
<<<<<<< HEAD
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-8 desktop:hidden">
=======
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-30 desktop:hidden">
>>>>>>> dev
      <div className="w-[360px] h-16 inset-0 bg-green opacity-20 rounded-[40px] filter blur-lg absolute" />
      <div className="relative bg-light-yellow rounded-[40px] w-[350px] h-[62px] flex flex-row items-center justify-between px-8">
        <HomeButton/>
        <LoginButton/>
      </div>
    </nav>
  )
}
