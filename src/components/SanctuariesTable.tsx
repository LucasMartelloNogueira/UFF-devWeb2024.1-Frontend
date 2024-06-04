import { SanctuaryDTO } from "../types/SanctuaryDTO";
import SanctuaryTableItem from "./SanctuaryTableItem";

type SanctuaryTableProps = {
  sanctuaries: SanctuaryDTO[];
  deleteSanctuary: (id: number) => void;
  loadingIds: number[];
};

export default function SanctuariesTable({
  sanctuaries,
  deleteSanctuary,
  loadingIds,
}: SanctuaryTableProps) {
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
          <SanctuaryTableItem
            key={sanctuary.id}
            sanctuary={sanctuary}
            deleteSanctuary={deleteSanctuary}
            isLoading={loadingIds.includes(sanctuary.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
