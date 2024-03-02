import EditIcon from "../../../../public/assets/icons/Edit-icon.svg";
import DeleteIcon from "../../../../public/assets/icons/Delete-icon.svg";
import Image from "next/image";

function EditDeleteIcons() {

  return (
    <nav className="flex gap-3">
    <button className="">
        <Image className="relative mt-1"
          src={EditIcon}
          width={36}
          height={36}
          alt="butón para editar"
        />
    </button>
    <button className="">
        <Image className="relative"
          src={DeleteIcon}
          width={28}
          height={36}
          alt="buton para borrar"
        />
    </button>
    </nav>
  );
}

export default EditDeleteIcons;