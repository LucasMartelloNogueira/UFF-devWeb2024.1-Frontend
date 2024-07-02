import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCartDTO } from "../types/UpdateCartDTO";
import useCartAPI from "./useCartAPI";

export default function useRemoveFromCart(){
    const { removeFromCart } = useCartAPI();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updateCartDTO: UpdateCartDTO) => {
            const updatedCart = await removeFromCart(updateCartDTO);
            queryClient.invalidateQueries({
                queryKey: ["pet", "put"],
            });
            return updatedCart;
        }
    });
}
