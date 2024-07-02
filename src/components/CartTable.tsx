import useCartContext from "../contexts/CartContext";
import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import CartTableItem from "./CartTableItem";

export default function CartTable(){

    const { cart } = useCartContext();

    if (!cart) throw new Error("Cart undefined");

    return (
        <table className="d-flex-column">
            <thead>
                <tr>
                  <th className="align-middle text-center">foto</th>
                  <th className="align-middle text-center">id</th>
                  <th className="align-middle text-center">nome</th>
                  <th className="align-middle text-center">animal</th>
                  <th className="align-middle text-center">quantidade</th>
                  <th className="align-middle text-center">ações</th>  
                </tr>
            </thead>
            <tbody>
                {cart.sanctuaryPets.map((sanctuaryPet: SanctuaryPetWithPetInfo) => {
                    return <CartTableItem sanctuaryPetWithPetInfo={sanctuaryPet}/>
                })}
            </tbody>
        </table>
    );
}