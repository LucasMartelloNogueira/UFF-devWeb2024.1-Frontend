import { createContext, useContext } from "react"
import { UpdateCartItemQuantityDTO } from "../types/UpdateCartItemQuantityDTO";

type CartPageHandling = {
    isChanged: boolean;
    setIsChanged: (value: boolean) => void;
    cartItemsQuantities: UpdateCartItemQuantityDTO[]
    setCartItemsQuantities: (cartItemsQuantities: UpdateCartItemQuantityDTO[]) => void
    handleRemoveFromCart: (sanctuaryPetId: number) => void
}

export const CartPageContext = createContext<CartPageHandling | undefined>(undefined);

export default function useCartPageContext() {
    const context = useContext(CartPageContext);

    if (context === undefined) {
        throw new Error("No CartPageContext provider")
    }

    return context;
}