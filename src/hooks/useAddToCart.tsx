import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CART_URL } from "../utils/Constants";
import useAPI from "./useAPI";
import { CartDTO } from "../types/CartDTO";
import { UpdateCartDTO } from "../types/UpdateCartDTO";

export default function useAddToCArt(){
    const { patch } = useAPI<CartDTO>(CART_URL);

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updateCartDTO: UpdateCartDTO) => patch(updateCartDTO),
        onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["pet", "put"],
        });
        },
    });
}