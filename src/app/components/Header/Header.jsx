import Logo from "@/app/components/ui/Logo";
import SearchBar from "../ui/SearchBar";


export default function Header() {
    return (
        <div className="flex flex-col items-center pt-[21px]">
            <Logo/>
            <div className="pt-8">
                <SearchBar/>
            </div>
        </div>
    )
}