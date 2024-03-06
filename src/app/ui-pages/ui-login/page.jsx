
import PalmTrees from "../../../../public/assets/icons/palm-trees.png";
import Image from "next/image";
import LogoutButton from "../../components/ui/LogoutButton"
import AddButton from "../../components/ui/AddButton"
import HomeButton from "@/app/components/ui/HomeButton";
import LoggedCard from "@/app/components/ui/LoggedCard";

function TestPage() {
  return (
    <>
      <article className=" flex flex-col m-auto desktop:w-[900px] h-[450px] desktop:flex-row desktop:gap-10 desktop:my-20">
        <Image
          className="rounded-br-[20px] rounded-bl-[20px]"
          src={PalmTrees}
          width={450}
          height={450}
          alt={"representación del destino eligido"}
        />
        <section className="flex flex-col m-3">
          <h3 className="text-l font-bold text-red ">
            Islas Azores
          </h3>
          <h4 className="text-m mt-[-14px] mb-4 text-red">Portugal</h4>
          <p className="text-s text-blue">
          Lorem ipsum dolor sit amet, consectetur farit adipiscing elit. Sed do eiusmod tempor colisi incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit in ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre van henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <div className="flex flex-row border-2">
          <LogoutButton />
          <AddButton />
          <HomeButton />
          <LoggedCard />
          </div>
        </section>
      </article>
    </>
  );
}

export default TestPage;
