import { SanctuaryDTO } from "../types/SanctuaryDTO"
import { SANCTUARY_SEARCH_VALUE_SORTED_PAGINATED_URL} from "../utils/Constants"
import useAPI from "./useAPI"
import { useQuery } from "@tanstack/react-query";

type QueryString = {
    page: number,
    size: number,
    searchValue: string
    sortField: string,
    sortDirection: string
}

export const useSanctuariesBySearchValueSortedPaginated = (queryString: QueryString) => {
    const { getPaginated } = useAPI<SanctuaryDTO>(SANCTUARY_SEARCH_VALUE_SORTED_PAGINATED_URL);

    return useQuery({
        queryKey: ["sanctuaries", "paginated", "searchValue", "sorted", queryString],
        queryFn: () =>
          getPaginated({
            params: {
              ...queryString,
            },
          }),
        staleTime: 10_000,
    });
}
