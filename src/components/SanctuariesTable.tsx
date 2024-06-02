import deleteIcon from "../assets/icons/database_delete.png"
import { useEffect, useState } from "react";
import { useSanctuariesPaginated } from "../hooks/useSanctuariesPaginated";
import { SanctuaryDTO } from "../types/SanctuaryDTO";
import { useDeleteSanctuary } from "../hooks/useDeleteSanctuary";

export default function SanctuariesTable() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

  const {
    data: sanctuariesPaginated,
    isPending: loadingSantuariesPaginated,
    error: errorSanctuariesPaginated,
  } = useSanctuariesPaginated({ page: page, size: size });

  const [sanctuaries, setSanctuaries] = useState([] as SanctuaryDTO[]);

  const {mutate: deleteSanctuary} = useDeleteSanctuary();

  const handleDeleteSanctuary = (id: number) => {
    setSanctuaries(
      (currentSanctuaries) => {
        return currentSanctuaries.filter(sanctuary => sanctuary.id !== id)
      }
    )
    deleteSanctuary(id)
  }
  
  useEffect(() => {
    if (!loadingSantuariesPaginated && sanctuariesPaginated?.items) {
      setSanctuaries(sanctuariesPaginated.items)
    }
  }, [sanctuariesPaginated, loadingSantuariesPaginated])
  
  if (loadingSantuariesPaginated) return <h1>loading...</h1>;
  if (errorSanctuariesPaginated) throw errorSanctuariesPaginated;
  

  return (
    <table>
      <thead>
        <tr>
          <th className="align-middle text-center">id</th>
          <th className="align-middle text-center">name</th>
          <th className="align-middle text-center">country</th>
          <th className="align-middle text-center">state</th>
          <th className="align-middle text-center">city</th>
          <th className="align-middle text-center">address</th>
          <th className="align-middle text-center">owner</th>
          <th className="align-middle text-center">actions</th>
        </tr>
      </thead>
      <tbody>
        {sanctuaries.map((sanctuary) => (
          <tr key={sanctuary.id}>
            <td width="8%" className="align-middle text-center">
              {sanctuary.id}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.name}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.country}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.state}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.city}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.address}
            </td>
            <td width="8%" className="align-middle text-center">
              {sanctuary.owner.name}
            </td>
            <td width="12%" className="align-middle text-center">
            <button onClick={() => handleDeleteSanctuary(sanctuary.id)} className="btn btn-danger btn-sm">
                <img src={deleteIcon} /> Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
