import Button from "@/app/components/ui/Button";

function DoubleButton() {

  return (
    <div className="flex flex-row gap-2">
      <Button buttonColor="bg-green" buttonText="Aceptar" />
      <Button buttonColor="bg-red" buttonText="Cancelar" />
    </div>
  );
}

export default DoubleButton;