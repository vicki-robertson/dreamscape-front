import Image from "next/image";
import PalmTrees from "../../../../public/assets/icons/palm-trees.png";
import QuestionMark from "../../../../public/assets/icons/Info-icon.svg";
import EditDeleteIcons from "./EditDeleteIcons";

function LoggedCard() {
  return (
    <article className="h-[373px] w-[300px] relative">
      <Image
        className="rounded-2xl left-0 top-0 absolute z-20"
        src={PalmTrees}
        width={300}
        height={300}
        alt={"representación del destino eligido"}
      />
      <Image
        className="absolute right-2 top-2 z-30"
        src={QuestionMark}
        width={48}
        height={48}
        alt={"signo de interrogación"}
      />
      <div className=" flex flex-col h-[100px] w-[300px] left-0 top-[273px] bg-light-yellow rounded-br-[20px] rounded-bl-[20px] absolute"></div>
      <span className="h-11 w-[207px] left-[21px] top-[302px] absolute text-m font-bold text-blue">
        Islas Azores
      </span>
      <span className="h-11 w-[207px] left-[21px] top-[329px] absolute text-s text-blue">
        Portugal
      </span>
      <div className="absolute bottom-[22px] right-5">
        <EditDeleteIcons />
      </div>
    </article>
  );
}

export default LoggedCard;
