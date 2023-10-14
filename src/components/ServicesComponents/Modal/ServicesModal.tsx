import ServiceTab from "./ServiceTab";
import ModalComponent from "@/components/Modal/ModalComponent";

export default function ServicesModal() {

  return (
    <ModalComponent
      btnText="Consultar Preços"
      btnClassName='font-semibold text-[#ac1742]'
    >
      <ServiceTab />
    </ModalComponent>
  );
}