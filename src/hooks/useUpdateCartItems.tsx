import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCartAPI from "./useCartAPI";
import { UpdateCartItemsDTO } from "../types/UpdateCartItemsDTO";

export default function useUpdateCartItems(){
    const { updateCartItemQuantity } = useCartAPI();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updateCartItemsDTO: UpdateCartItemsDTO) => {
            const updatedCart = await updateCartItemQuantity(updateCartItemsDTO);
            queryClient.invalidateQueries({
                queryKey: ["pet", "put"],
            });
            return updatedCart;
        }
    });
}