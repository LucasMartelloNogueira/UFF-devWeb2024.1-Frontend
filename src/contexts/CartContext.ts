import { createContext, useContext } from "react";
import { CartWithPetsInfoDTO } from "../types/CartWithPetsInfoDTO";

type cartHandling = {
    cart: CartWithPetsInfoDTO | undefined,
    addToCart: (sanctuaryPetIds: number[]) => Promise<void>
    removeFromCart: (sanctuaryPetIds: number[]) => Promise<void>
}

export const CartContext = createContext<cartHandling | undefined>(undefined);

export default function useCartContext() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("No CartContext provider");
    }

    return context;
}

