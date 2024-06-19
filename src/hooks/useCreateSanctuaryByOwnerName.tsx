import { SanctuaryWithOwnerNameDTO } from "../types/SanctuaryWithOwnerNameDTO";
import { SANCTUARY_CREATE_BY_OWNER_NAME } from "../utils/Constants";
import useAPI from "./useAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateSanctuaryByOwnerName = () => {
  const { post } = useAPI<SanctuaryWithOwnerNameDTO>(SANCTUARY_CREATE_BY_OWNER_NAME);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sanctuaryByOwnerName: SanctuaryWithOwnerNameDTO) => post(sanctuaryByOwnerName),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sanctuaries"],
      });
    },
  });
};
