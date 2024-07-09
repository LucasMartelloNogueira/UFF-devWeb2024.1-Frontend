import { SanctuaryPetWithPetInfo } from "./SanctuaryPetWithPetInfo"

export type CartItemWithPetInfoDTO = {
    id: number,
    cartId: number,
    quantity: number,
    sanctuaryPetWithPetInfoDTO: SanctuaryPetWithPetInfo
}