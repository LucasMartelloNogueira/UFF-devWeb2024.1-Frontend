import { createContext, useContext } from "react";
import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";

type handleFunctions = {
    editSanctuaryPet: (editedSanctuaryPet: SanctuaryPetWithPetInfo) => void
}

export const SanctuaryInfoWithPetsContext = createContext<handleFunctions | undefined>(undefined);

export default function useSanctuaryInfoWithPetsContext() {
    const context = useContext(SanctuaryInfoWithPetsContext);

    if (context === undefined) {
        throw new Error("No SanctuaryInfoWithPetsContext provider");
    }

    return context;
}

