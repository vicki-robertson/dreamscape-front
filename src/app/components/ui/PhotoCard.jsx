import Image from "next/image";
import PalmTrees from "../../../../public/assets/icons/palm-trees.png";

function PhotoCard() {
  return (
    <article className="h-[373px] w-[285px] relative">
      <Image
        className="rounded-2xl left-0 top-0 absolute z-20"
        src={PalmTrees}
        width={285}
        height={300}
        alt={"representación del destino eligido"}
      />
      <div className=" flex flex-col h-[100px] w-[285px] top-[260px] bg-light-yellow rounded-br-[20px] rounded-bl-[20px] absolute">
      </div>
      <span className="h-11 w-[207px] left-[21px] top-[290px] absolute text-m font-bold text-blue">Islas Azores</span>
      <span className="h-11 w-[207px] left-[21px] top-[315px] absolute text-s text-blue">Portugal</span>
    </article>
  );
}


export default PhotoCard;