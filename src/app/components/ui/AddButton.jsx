import Image from "next/image";
import CreateIcon from "../../../../public/assets/icons/Create-icon.svg";

export default function HomeButton() {
  return (
    <div className="">
      <a href="">
        <Image
          className=""
          src={CreateIcon}
          width={40}
          height={40}
          alt="botón para crear destinos"
        />
      </a>
    </div>
  );
}
