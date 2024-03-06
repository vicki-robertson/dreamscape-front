import DeleteIcon from "../../../../public/assets/icons/Delete-icon.svg";
import Image from "next/image";

function DeleteButton() {
  return (
    <button className="">
      <a href="/">
        <Image
          className="relative"
          src={DeleteIcon}
          width={28}
          height={36}
          alt="buton para borrar"
        />
      </a>
    </button>
  );
}

export default DeleteButton;
