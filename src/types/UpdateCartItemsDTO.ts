import { UpdateCartItemQuantityDTO } from "./UpdateCartItemQuantityDTO";

export type UpdateCartItemsDTO = {
    cartId: number;
    items: UpdateCartItemQuantityDTO[]
}