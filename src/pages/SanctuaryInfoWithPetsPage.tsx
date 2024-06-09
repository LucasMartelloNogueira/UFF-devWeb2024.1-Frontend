import { useLocation } from "react-router-dom";
import SanctuaryForm from "../components/SanctuaryForm";


export default function SanctuaryInfoWithPetsPage() {

    const location = useLocation();
    const sanctuary = location.state.sanctuary || {};

    return (
        <>
            <SanctuaryForm sanctuary={sanctuary}/>
        </>
    );
}