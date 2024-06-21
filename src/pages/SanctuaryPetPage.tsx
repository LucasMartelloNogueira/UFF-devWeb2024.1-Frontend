import { useLocation } from "react-router-dom";
import SanctuaryPetForm from "../components/SanctuaryPetForm";

export default function SanctuaryPetPage() {
  const location = useLocation();
  const state = location.state || {}
  const sanctuaryPet = state.sanctuaryPet || undefined;


  return (
    <>
        <SanctuaryPetForm sanctuaryPet={sanctuaryPet} />
    </>
  );
}