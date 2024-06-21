import { SanctuaryDTO } from "../types/SanctuaryDTO";
import { SANCTUARY_PETS_URL } from "../utils/Constants";
import useAPI from "./useAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteSanctuaryPet = () => {
  const { remove } = useAPI<SanctuaryDTO>(SANCTUARY_PETS_URL);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sanctuaryPet", "delete", "sanctuaryId"],
      });
    },
  });
};
