import DeleteIcon from "../../../../public/assets/icons/Delete-icon.svg";
import Image from "next/image";
import { destinationService } from "../../services/destinationService";

export default function DeleteButton({ destinationId, onDelete }) {

  const handleDelete = async () => {
    try {
      await destinationService.deleteDestination(destinationId);
      onDelete(destinationId);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  return (
    <button onClick={handleDelete}>
      <Image
        className="relative"
        src={DeleteIcon}
        width={28}
        height={36}
        alt="button para borrar"
      />
    </button>
  );
}
