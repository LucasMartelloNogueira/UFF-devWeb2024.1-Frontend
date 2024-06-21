import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PetDTO } from "../types/PetDTO";
import { PETS_URL } from "../utils/Constants";
import useAPI from "./useAPI";

export default function useEditPet(){
    const { put } = useAPI<PetDTO>(PETS_URL);

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (pet :PetDTO) => put(pet),
        onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["pet", "put"],
        });
        },
    });
}