import InputBox from "./InputBox";
import SearchButton from "./SearchButton";

export default function SearchBar() {
    return (
      <div className="relative w-[200px]">
        <InputBox size="s" placeholder="Search..." className=""/>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <SearchButton />
        </div>
      </div>
    )
  }