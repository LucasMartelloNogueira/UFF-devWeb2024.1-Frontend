import useCartContext from "../contexts/CartContext";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";
import { CartItemWithPetInfoDTO } from "../types/CartItemWithPetInfoDTO";

type CartTableItemProps = {
  cartItem: CartItemWithPetInfoDTO
};

export default function CartTableItem({
  cartItem,
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
          src={getAnimalImage(cartItem.sanctuaryPetWithPetInfoDTO.pet.animal)}
          alt="foto animal"
          width="100px"
          height="50px"
          style={{borderRadius: "20px"}}
        />
      </td>
      <td width="8%" className="align-middle text-center">
        {cartItem.sanctuaryPetWithPetInfoDTO.pet.id}
      </td>
      <td width="8%" className="align-middle text-center">
        {cartItem.sanctuaryPetWithPetInfoDTO.pet.name}
      </td>
      <td width="8%" className="align-middle text-center">
        {cartItem.sanctuaryPetWithPetInfoDTO.pet.animal}
      </td>
      <td width="8%" className="align-middle text-center">
        {cartItem.quantity}
      </td>
      <td width="12%" className="align-middle text-center">
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart([cartItem.sanctuaryPetWithPetInfoDTO.id])}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
