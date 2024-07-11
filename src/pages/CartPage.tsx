import { useState, useEffect } from "react";
import CartTable from "../components/CartTable";
import useCartContext from "../contexts/CartContext";
import { CartPageContext } from "../contexts/CartPageContext";
import useUpdateCartItems from "../hooks/useUpdateCartItems";
import { UpdateCartItemsDTO } from "../types/UpdateCartItemsDTO";
import { UpdateCartItemQuantityDTO } from "../types/UpdateCartItemQuantityDTO";

export default function CartPage() {
  const { cart, setCart } = useCartContext();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [initialQuantities, setInitialQuantities] = useState<
    UpdateCartItemQuantityDTO[]
  >(
    cart!.items.map((ci) => {
      return { cartItemId: ci.id, quantity: ci.quantity };
    })
  );
  const [cartItemsQuantities, setCartItemsQuantities] = useState<
    UpdateCartItemQuantityDTO[]
  >(
    cart!.items.map((ci) => {
      return { cartItemId: ci.id, quantity: ci.quantity };
    })
  );

  const getTotalCartValue = () => {
    return cart!.items.reduce(
      (acc, ci) =>
        acc +
        ci.sanctuaryPetWithPetInfoDTO.pet.estimateMonthlyCosts * cartItemsQuantities.find((item) => item.cartItemId === ci.id)!.quantity,
      0
    );
  };

  const [totalCartValue, setTotalCartValue] = useState<number>(getTotalCartValue());

  const { mutateAsync: updateCartItems } = useUpdateCartItems();

  useEffect(() => {
    const hasChanges = initialQuantities.some(
      (ci, index) => ci.quantity !== cartItemsQuantities[index].quantity
    );
    setIsChanged(hasChanges);
    setTotalCartValue(getTotalCartValue())  
  }, [cartItemsQuantities, initialQuantities]);

  const handleUpdateCart = async () => {
    const updateCartItemsDTO: UpdateCartItemsDTO = {
      cartId: cart!.id,
      items: cartItemsQuantities,
    };

    const newCart = await updateCartItems(updateCartItemsDTO);
    setCart(newCart);
    setInitialQuantities(cartItemsQuantities);
    setIsChanged(false);
  };


  return (
    <>
      <h1>Carrinho</h1>
      {cart!.items.length === 0 ? (
        <h5>Nada no carrinho</h5>
      ) : (
        <CartPageContext.Provider
          value={{
            isChanged: isChanged,
            setIsChanged: setIsChanged,
            cartItemsQuantities: cartItemsQuantities,
            setCartItemsQuantities: setCartItemsQuantities,
          }}
        >
          <CartTable />
          <hr />
          <div
            style={{ marginTop: "10px", marginRight: "140px" }}
            className="d-flex flex-row-reverse"
          >
            <div>
              <strong>Total: </strong>
              {totalCartValue}
              <button
                style={{marginLeft: "10px"}}
                className={
                  isChanged ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => handleUpdateCart()}
                disabled={!isChanged}
              >
                Atualizar carrinho
              </button>
            </div>
          </div>
        </CartPageContext.Provider>
      )}
    </>
  );
}
