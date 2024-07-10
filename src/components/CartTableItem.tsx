import useCartContext from "../contexts/CartContext";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";
import { CartItemWithPetInfoDTO } from "../types/CartItemWithPetInfoDTO";
import { useState, useEffect } from "react";
import useCartPageContext from "../contexts/CartPageContext";
import { CartWithPetsInfoDTO } from "../types/CartWithPetsInfoDTO";

type CartTableItemProps = {
  cartItem: CartItemWithPetInfoDTO
};

export default function CartTableItem({
  cartItem,
}: CartTableItemProps) {
  const { removeFromCart } = useCartContext();
  const { setIsChanged, cartItemsQuantities, setCartItemsQuantities } = useCartPageContext();
  const [shownQuantity, setShownQuantity] = useState<number>(cartItem.quantity);
  const [shownEstimatedMonthlyCosts, setShownEstimatedMonthlyCosts] = useState<number>(cartItem.sanctuaryPetWithPetInfoDTO.pet.estimateMonthlyCosts * shownQuantity);

  const getAnimalImage = (name: string) => {
    const images = new Map<string, string>([
      ["cachorro", DogImage],
      ["gato", CatImage],
    ]);

    const img = images.get(name);

    return img !== undefined ? img : DefaultAnimalImage;
  };

  const handleChangeQuantity = (quantity: number) => {
    if (quantity < 0) {
      quantity = 0;
    }
    setShownQuantity(quantity);
    setShownEstimatedMonthlyCosts(cartItem.sanctuaryPetWithPetInfoDTO.pet.estimateMonthlyCosts * quantity);
    setCartItemsQuantities(cartItemsQuantities.map((ci) => {
      if (ci.cartItemId === cartItem.id) {
        return { ...ci, quantity: quantity };
      }
      return ci;
    }));
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
        <input type="number" value={shownQuantity} style={{width: "50px"}} onChange={(e) => handleChangeQuantity(Number(e.target.value))} />
      </td>
      <td width="8%" className="align-middle text-center">
        {shownEstimatedMonthlyCosts}
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
