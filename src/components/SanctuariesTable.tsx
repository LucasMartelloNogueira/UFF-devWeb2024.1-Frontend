import { useEffect, useState } from "react";
import { SanctuaryDTO } from "../types/SanctuaryDTO";
import SanctuaryTableItem from "./SanctuaryTableItem";
import SortOrderUpIcon from "../assets/icons/sort-order-up-16.png";
import SortOrderDownIcon from "../assets/icons/sort-order-down-16.png";
import SortOrderNoneIcon from "../assets/icons/sort-order-none.png";

type SanctuaryTableProps = {
  sanctuaries: SanctuaryDTO[];
  deleteSanctuary: (id: number) => void;
  selectSanctuary: (sanctuary: SanctuaryDTO) => void;
  loadingIds: number[];
  sortField: string;
  setSortField: (sortField: string) => void;
  sortDirection: string;
  setSortDirection: (sortDirection: string) => void;
  isLoading: boolean;
};

type SortOrderState = "none" | "up" | "down";

export default function SanctuariesTable({
  sanctuaries,
  deleteSanctuary,
  selectSanctuary,
  loadingIds,
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  isLoading
}: SanctuaryTableProps) {

  const [idSortState, setIdSortState] = useState<SortOrderState>("none");
  const [idSortStateIcon, setIdSortStateIcon] = useState(SortOrderNoneIcon);

  const [nameSortState, setNameSortState] = useState<SortOrderState>("none");
  const [nameSortStateIcon, setNameSortStateIcon] = useState(SortOrderNoneIcon);

  const [countrySortState, setCountrySortState] = useState<SortOrderState>("none");
  const [countrySortStateIcon, setCountrySortStateIcon] = useState(SortOrderNoneIcon);

  const [stateSortState, setStateSortState] = useState<SortOrderState>("none");
  const [stateSortStateIcon, setStateSortStateIcon] = useState(SortOrderNoneIcon);

  const [citySortState, setCitySortState] = useState<SortOrderState>("none");
  const [citySortStateIcon, setCitySortStateIcon] = useState(SortOrderNoneIcon);

  const [addressSortState, setAddressSortState] = useState<SortOrderState>("none");
  const [addressSortStateIcon, setAddressSortStateIcon] = useState(SortOrderNoneIcon);

  const [ownerSortState, setOwnerSortState] = useState<SortOrderState>("none");
  const [ownerSortStateIcon, setOwnerSortStateIcon] = useState(SortOrderNoneIcon);


  type FieldStatesMap = {
    [key: string]: {
      state: SortOrderState,
      setState: React.Dispatch<React.SetStateAction<SortOrderState>>,
      icon: string,
      setStateIcon: React.Dispatch<React.SetStateAction<string>>
    }
  }

  const fieldsStates: FieldStatesMap = {
    "id": { 
      state: idSortState, 
      setState: setIdSortState,
      icon: idSortStateIcon,
      setStateIcon: setIdSortStateIcon 
    },
    "name": { 
      state: nameSortState, 
      setState: setNameSortState,
      icon: nameSortStateIcon,
      setStateIcon: setNameSortStateIcon
    },
    "country": { 
      state: countrySortState, 
      setState: setCountrySortState,
      icon: countrySortStateIcon,
      setStateIcon: setCountrySortStateIcon
    },
    "state": { 
      state: stateSortState,
      setState: setStateSortState,
      icon: stateSortStateIcon,
      setStateIcon: setStateSortStateIcon
    },
    "city": { 
      state: citySortState,
      setState: setCitySortState,
      icon: citySortStateIcon,
      setStateIcon: setCitySortStateIcon 
    },
    "address": { 
      state: addressSortState,
      setState: setAddressSortState,
      icon: addressSortStateIcon,
      setStateIcon: setAddressSortStateIcon 
    },
    "owner": { 
      state: ownerSortState,
      setState: setOwnerSortState,
      icon: ownerSortStateIcon,
      setStateIcon: setOwnerSortStateIcon 
    },
  }

  const handleSortState = (selectedKey: string) => {
    Object.keys(fieldsStates).forEach((key) => {
      if (key !== selectedKey) {
        fieldsStates[key].setState("none");
      }
    });

    const currentSortState = fieldsStates[selectedKey].state;
    let newSortDirection = "";

    if (currentSortState === "none" || currentSortState === "down") {
      fieldsStates[selectedKey].setState("up");
      newSortDirection = "asc";
    } else {
      fieldsStates[selectedKey].setState("down");
      newSortDirection = "desc";
    }

    setSortField(selectedKey);
    setSortDirection(newSortDirection);
  }

  // const getSortOrderIcon = (state: SortOrderState) => {
  //   if (state === "up") return SortOrderUpIcon;
  //   if (state === "down") return SortOrderDownIcon;
  //   return SortOrderNoneIcon;
  // }

  useEffect(() => {
    if (!isLoading) {
      fieldsStates[sortField].setStateIcon(sortDirection === "asc" ? SortOrderUpIcon : SortOrderDownIcon);
    }
  }, [sanctuaries, isLoading])

  return (
    <table>
      <thead>
        <tr>
          <th className="align-middle text-center">id <img src={idSortStateIcon} alt="Sort-icon" onClick={() => handleSortState("id")} /> </th>
          <th className="align-middle text-center">name <img src={nameSortStateIcon} alt="Sort-icon" onClick={() => handleSortState("name")} /> </th>
          <th className="align-middle text-center">country <img src={countrySortStateIcon} alt="Sort-icon" onClick={() => handleSortState("country")} /> </th>
          <th className="align-middle text-center">state <img src={stateSortStateIcon} alt="Sort-icon" onClick={() => handleSortState("state")} /> </th>
          <th className="align-middle text-center">city <img src={citySortStateIcon} alt="Sort-icon" onClick={() => handleSortState("city")} /> </th>
          <th className="align-middle text-center">address <img src={addressSortStateIcon} alt="Sort-icon" onClick={() => handleSortState("address")} /> </th>
          <th className="align-middle text-center">owner <img src={ownerSortStateIcon} alt="Sort-icon" onClick={() => handleSortState("owner")} /> </th>
          <th className="align-middle text-center">actions</th>
        </tr>
      </thead>
      <tbody>
        {sanctuaries.map((sanctuary) => (
          <SanctuaryTableItem
            key={sanctuary.id}
            sanctuary={sanctuary}
            deleteSanctuary={deleteSanctuary}
            selectSanctuary={selectSanctuary}
            isLoading={loadingIds.includes(sanctuary.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
