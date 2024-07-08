import { useEffect, useState } from "react";
import SanctuariesTable from "../components/SanctuariesTable";
import { SanctuaryDTO } from "../types/SanctuaryDTO";
import { useDeleteSanctuary } from "../hooks/useDeleteSanctuary";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SanctuaryForm from "../components/SanctuaryForm";
import { useSanctuariesBySearchValueSortedPaginated } from "../hooks/useSanctuariesBySearchValueSortedPaginated";

export default function SanctuariesPage() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [searchValue, setSearchValue] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const initialSanctuary: SanctuaryDTO | undefined = undefined;
  const [selectedSanctuary, setSelectedSanctuary] = useState(
    initialSanctuary as SanctuaryDTO | undefined
  );

  const {
    data: sanctuariesPaginated,
    isPending: loadingSantuariesPaginated,
    error: errorSanctuariesPaginated,
  } = useSanctuariesBySearchValueSortedPaginated({
    page: page,
    size: size,
    searchValue: searchValue,
    sortField: sortField,
    sortDirection: sortDirection,
  });

  const [sanctuaries, setSanctuaries] = useState([] as SanctuaryDTO[]);
  const [loadingIds, setLoadingIds] = useState<number[]>([]);

  const { mutate: deleteSanctuary } = useDeleteSanctuary();

  const handleDeleteSanctuary = (id: number) => {
    setLoadingIds((prev) => [...prev, id]);
    deleteSanctuary(id, {
      onSuccess: () => {
        setSanctuaries((currentSanctuaries) => {
          return currentSanctuaries.filter((sanctuary) => sanctuary.id !== id);
        });
        setLoadingIds((prev) => prev.filter((loadingId) => loadingId !== id));
        setPage(0);
      },
      onError: () => {
        setLoadingIds((prev) => prev.filter((loadingId) => loadingId !== id));
      },
    });
  };

  useEffect(() => {
    if (!loadingSantuariesPaginated && sanctuariesPaginated?.items) {
      setSanctuaries(sanctuariesPaginated.items);
    }
  }, [sanctuariesPaginated, loadingSantuariesPaginated]);

  if (loadingSantuariesPaginated)
    return (
      <>
        <h1 className="">Santuários</h1>
        <h1>loading...</h1>
      </>
    );
  if (errorSanctuariesPaginated)
    throw new Error("error on useSanctuariesPaginated");

  return (
    <>
      <h1 className="">Santuários</h1>
      <div>
        <SanctuaryForm
          sanctuary={selectedSanctuary}
          selectSanctuary={setSelectedSanctuary}
        />
      </div>
      <hr />
      <SearchBar value={searchValue} handleValue={setSearchValue} />
      {sanctuaries.length === 0 ? (
        <h5>nenhum santuario encontrado</h5>
      ) : (
        <>
          <SanctuariesTable
            sanctuaries={sanctuaries}
            deleteSanctuary={handleDeleteSanctuary}
            selectSanctuary={setSelectedSanctuary}
            loadingIds={loadingIds}
            sortField={sortField}
            setSortField={setSortField}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
            isLoading={loadingSantuariesPaginated}
          />
          <Pagination
            totalOfPages={sanctuariesPaginated.totalOfPages}
            pageNumber={page}
            handlePageSelection={setPage}
          />
        </>
      )}
    </>
  );
}
