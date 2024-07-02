import { useQuery } from "@tanstack/react-query"
import useCartAPI from "./useCartAPI"


export const useGetCart = (cartId: number) => {
    const { getCart } = useCartAPI();

    return useQuery({
        queryKey: ["cart", cartId],
        queryFn: () => getCart(cartId),
        staleTime: 10_000,
    });
}