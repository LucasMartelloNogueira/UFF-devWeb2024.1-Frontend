import { SanctuaryDTO } from "../types/SanctuaryDTO"
import { SANCTUARY_URL } from "../utils/Constants"
import useAPI from "./useAPI"
import { useQuery } from "@tanstack/react-query";

type QueryString = {
    page: number,
    size: number
}

export const useSanctuariesPaginated = (queryString: QueryString) => {
    const { getPaginated } = useAPI<SanctuaryDTO>(SANCTUARY_URL);

    return useQuery({
        queryKey: ["sanctuaries", "paginated", queryString],
        queryFn: () =>
          getPaginated({
            params: {
              ...queryString,
            },
          }),
        staleTime: 10_000,
    });
}
