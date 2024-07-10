import { createContext, useContext } from "react";
import { CartWithPetsInfoDTO } from "../types/CartWithPetsInfoDTO";

type cartHandling = {
    cart: CartWithPetsInfoDTO | undefined;
    setCart: (newCart: CartWithPetsInfoDTO | undefined) => void;
    addToCart: (sanctuaryPetIds: number[]) => void;
    removeFromCart: (sanctuaryPetIds: number[]) => void;
}

export const CartContext = createContext<cartHandling | undefined>(undefined);

export default function useCartContext() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("No CartContext provider");
    }

    return context;
}

