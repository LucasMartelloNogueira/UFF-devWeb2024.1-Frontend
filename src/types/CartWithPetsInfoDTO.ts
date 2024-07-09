import { CartItemWithPetInfoDTO } from "./CartItemWithPetInfoDTO";
import { UserSimplifiedDTO } from "./UserSimplifiedDTO"

export type CartWithPetsInfoDTO = {
    id: number;
    user: UserSimplifiedDTO;
    items: CartItemWithPetInfoDTO[];
}