import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthAPI from "./useAuthAPI";
import { UserCredentials } from "../types/UserCredentials";

export default function useLogin() {
    const { login } = useAuthAPI();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (userCredentials: UserCredentials) => {
            const updatedCart = await login(userCredentials);
            queryClient.invalidateQueries({
                queryKey: ["user", "login"],
            });
            return updatedCart;
        }
    });
    
}