import { SanctuaryDTO } from "../types/SanctuaryDTO"
import { SANCTUARY_SEARCH_VALUE_PAGINATED_URL} from "../utils/Constants"
import useAPI from "./useAPI"
import { useQuery } from "@tanstack/react-query";

type QueryString = {
    page: number,
    size: number,
    searchValue: string
}

export const useSanctuariesBySearchValuePaginated = (queryString: QueryString) => {
    const { getPaginated } = useAPI<SanctuaryDTO>(SANCTUARY_SEARCH_VALUE_PAGINATED_URL);

    return useQuery({
        queryKey: ["sanctuaries", "paginated", "searchValue", queryString],
        queryFn: () =>
          getPaginated({
            params: {
              ...queryString,
            },
          }),
        staleTime: 10_000,
    });
}
