import { CartItemDTO } from "./CartItemDTO";

export type CartDTO = {
    id: number;
    userId: number;
    items: CartItemDTO[]
}