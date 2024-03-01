import HomeButton from "../ui/HomeButton";
import LoginButton from "../ui/LoginButton";

export default function NavbarMobile() {
  return (
    <nav className="relative w-[360px] h-[72px]">
      <div className="absolute inset-0 bg-green opacity-20 rounded-[40px] filter blur-lg" />
      <div className="relative bg-light-yellow rounded-[40px] p-4 w-[350px] h-[62px] flex flex-row items-center justify-between px-8">
        <HomeButton/>
        <LoginButton/>
      </div>
    </nav>
  )
}
