
import AddButton from "../../components/ui/AddButton"
import HomeButton from "@/app/components/ui/HomeButton";
import LogoutButton from "../../components/ui/LogoutButton";
import LoggedCard from "@/app/components/ui/LoggedCard";

function TestPage() {
  return (
    <>
          <div className="flex flex-row border-2">
          <LogoutButton />
          <AddButton />
          <HomeButton />
          <LoggedCard />
          </div>
    </>
  );
}

export default TestPage;
