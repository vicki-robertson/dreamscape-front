import EditIcon from "../../../../public/assets/icons/Edit-icon.svg";
import Image from "next/image";

function EditButton() {
  return (
    <button className="">
      <a href="/create-dest">
        <Image
          className="relative mt-1"
          src={EditIcon}
          width={36}
          height={36}
          alt="butón para editar"
        />
      </a>
    </button>
  );
}

export default EditButton;
