import ServiceTab from "./ServiceTab";
import ModalComponent from "@/components/Modal/ModalComponent";

export default function ServicesModal() {
  
  return (
    <ModalComponent
      btnText="Consultar Preços"
      btnClassName='font-semibold text-[#fff] bg-purple-600 shadow-lg hover:bg-purple-700'
      btnVariant="contained"
    >
      <ServiceTab />
    </ModalComponent>
  );
}