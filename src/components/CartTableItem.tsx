import useCartContext from "../contexts/CartContext";
import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";

type CartTableItemProps = {
  sanctuaryPetWithPetInfo: SanctuaryPetWithPetInfo;
};

export default function CartTableItem({
  sanctuaryPetWithPetInfo,
}: CartTableItemProps) {
  const { removeFromCart } = useCartContext();

  const getAnimalImage = (name: string) => {
    const images = new Map<string, string>([
      ["cachorro", DogImage],
      ["gato", CatImage],
    ]);

    const img = images.get(name);

    return img !== undefined ? img : DefaultAnimalImage;
  };

  return (
    <tr>
      <td width="1%" style={{marginLeft: "10px"}}>
        <img
          className="align-middle text-center"
          src={getAnimalImage(sanctuaryPetWithPetInfo.pet.animal)}
          alt="foto animal"
          width="100px"
          height="50px"
          style={{borderRadius: "20px"}}
        />
      </td>
      <td width="8%" className="align-middle text-center">
        {sanctuaryPetWithPetInfo.id}
      </td>
      <td width="8%" className="align-middle text-center">
        {sanctuaryPetWithPetInfo.pet.name}
      </td>
      <td width="8%" className="align-middle text-center">
        {sanctuaryPetWithPetInfo.pet.animal}
      </td>
      <td width="8%" className="align-middle text-center">
        1
      </td>
      <td width="12%" className="align-middle text-center">
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart([sanctuaryPetWithPetInfo.id])}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
