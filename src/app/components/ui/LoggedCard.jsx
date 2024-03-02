import Image from "next/image";
import QuestionMark from "../../../../public/assets/icons/Info-icon.svg";
import PhotoCard from "./PhotoCard";
import EditDeleteIcons from "./EditDeleteIcons";

function LoggedCard() {
  return (
    <article className="h-[373px] w-[300px] relative">
      <Image
        className="absolute right-3 top-2 z-30"
        src={QuestionMark}
        width={48}
        height={48}
        alt={"signo de interrogación"}
      />
      <PhotoCard />
      <div className="float-right relative bottom-[74px] right-6">
      <EditDeleteIcons/>
      </div>
    </article>
  );
}

export default LoggedCard;
