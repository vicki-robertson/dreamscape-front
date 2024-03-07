
import PalmTrees from "../../../public/assets/icons/palm-trees.png";
import Image from "next/image";


function DetailsPage() {
  return (
    <>
      <article className=" flex flex-col m-auto desktop:w-[900px] h-[450px] desktop:flex-row desktop:gap-10 desktop:my-20">
        <Image
          className="rounded-br-[20px] rounded-bl-[20px] desktop:rounded-[20px]"
          src={PalmTrees}
          width={450}
          height={450}
          alt={"representación del destino eligido"}
        />
        <section className="flex flex-col m-3">
          <div className="bg-red z-20 w-72 h-24 desktop:hidden ml-auto mr-auto">
          <h3 className="text-l font-bold text-light-yellow text-center">
            Islas Azores
          </h3>
          <h4 className="text-m text-light-yellow text-center desktop:mb-4">Portugal</h4>
          </div>
          <h3 className="text-l font-bold text-light-yellow text-center">
            Islas Azores
          </h3>
          <h4 className="text-m text-light-yellow text-center desktop:mb-4">Portugal</h4>
          desktop:text-red desktop:mt-[-14px]
          <p className="text-s text-blue">
          Lorem ipsum dolor sit amet, consectetur farit adipiscing elit. Sed do eiusmod tempor colisi incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit in ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre van henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </section>
      </article>
    </>
  );
}

export default DetailsPage;
