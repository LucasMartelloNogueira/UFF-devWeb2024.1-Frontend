import CartTable from "../components/CartTable";
import useCartContext from "../contexts/CartContext";

export default function CartPage() {

    const { cart } = useCartContext();

    return (
        <>
            <h1>Carrinho</h1>
            <CartTable />
        </>
    );
}