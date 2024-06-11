import { SanctuaryDTO } from "../types/SanctuaryDTO";
import deleteIcon from "../assets/icons/database_delete.png";
import { Link } from "react-router-dom";

type SanctuaryTableItemProps = {
  sanctuary: SanctuaryDTO;
  deleteSanctuary: (id: number) => void;
  selectSanctuary: (sanctuary: SanctuaryDTO) => void;
  isLoading: boolean;
};

export default function SanctuaryTableItem({
  sanctuary,
  deleteSanctuary,
  selectSanctuary,
  isLoading,
}: SanctuaryTableItemProps) {
  return (
    <tr onClick={() => selectSanctuary(sanctuary)}>
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
        <Link to="../sanctuaryInfoWithPetsPage" state={{sanctuary: sanctuary}}>ver mais</Link>
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button
            onClick={() => deleteSanctuary(sanctuary.id)}
            className="btn btn-danger btn-sm"
          >
            <img src={deleteIcon} alt="delete icon" /> Remover
          </button>
        )}
      </td>
    </tr>
  );
}
