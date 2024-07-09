import useCartContext from "../contexts/CartContext";
import { CartItemWithPetInfoDTO } from "../types/CartItemWithPetInfoDTO";
import CartTableItem from "./CartTableItem";

export default function CartTable(){

    const { cart } = useCartContext();

    if (!cart) throw new Error("Cart undefined");

    return (
        <table className="d-flex-column">
            <thead>
                <tr>
                  <th className="align-middle text-center">foto</th>
                  <th className="align-middle text-center">petId</th>
                  <th className="align-middle text-center">nome</th>
                  <th className="align-middle text-center">animal</th>
                  <th className="align-middle text-center">quantidade</th>
                  <th className="align-middle text-center">ações</th>  
                </tr>
            </thead>
            <tbody>
                {cart.items.map((cartItem: CartItemWithPetInfoDTO) => {
                    return <CartTableItem key={cartItem.id} cartItem={cartItem}/>
                })}
            </tbody>
        </table>
    );
}