import { SanctuaryPetWithPetInfo } from "./SanctuaryPetWithPetInfo";
import { UserSimplifiedDTO } from "./UserSimplifiedDTO"

export type CartWithPetsInfoDTO = {
    id: number;
    user: UserSimplifiedDTO;
    sanctuaryPets: SanctuaryPetWithPetInfo[];
}