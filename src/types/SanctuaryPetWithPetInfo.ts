import { PetDTO } from "./PetDTO"

export type SanctuaryPetWithPetInfo = {
    id: number;
    pet: PetDTO;
    sanctuaryId: number;
    admissionDate: Date;
    adoptionStatus: string;
    observations: string;
}