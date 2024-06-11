import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import { SANCTUARY_PETS_BY_SANCTUARY_ID_URL } from "../utils/Constants";
import useAPI from "./useAPI"
import { useQuery } from "@tanstack/react-query";

type QueryString = {
    page: number,
    size: number,
    sanctuaryId: number
}

export const UseSanctuaryPetsBySanctuaryIdPaginated = (queryString: QueryString) => {
    const { getPaginated } = useAPI<SanctuaryPetWithPetInfo>(SANCTUARY_PETS_BY_SANCTUARY_ID_URL);

    return useQuery({
        queryKey: ["sanctuaryPet", "paginated", "sanctuaryId", queryString],
        queryFn: () =>
          getPaginated({
            params: {
              ...queryString,
            },
          }),
        staleTime: 10_000,
    });
}
