
import { SanctuaryDTO } from "../types/SanctuaryDTO";
import { SANCTUARY_URL } from "../utils/Constants";
import useAPI from "./useAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateSanctuary = () => {
  const { put } = useAPI<SanctuaryDTO>(SANCTUARY_URL);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sanctuary: SanctuaryDTO) => put(sanctuary),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sanctuaries"],
      });
    },
  });
};
