import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetCart } from "./hooks/useGetCart";
import { useEffect, useState } from "react";
import { CartWithPetsInfoDTO } from "./types/CartWithPetsInfoDTO";
import { UpdateCartDTO } from "./types/UpdateCartDTO";
import { CartContext } from "./contexts/CartContext";
import useAddToCart from "./hooks/useAddToCart";
import useRemoveFromCart from "./hooks/useRemoveFromCart";

function App() {
  const [cart, setCart] = useState<CartWithPetsInfoDTO | undefined>(undefined);
  const cartId = 1;

  const { mutateAsync: addToCart } = useAddToCart();
  const { mutateAsync: removeFromCart } = useRemoveFromCart();

  const {
    data: _cart,
    isPending: isLoading,
    error: cartError,
  } = useGetCart(cartId);

  const handleAddToCart = async (ids: number[]) => {
    const updateCartDTO: UpdateCartDTO = {
      cartId: 1,
      sanctuaryPetsId: ids
    };
    const updatedCart = await addToCart(updateCartDTO);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = async (ids: number[]) => {
    const updateCartDTO: UpdateCartDTO = {
      cartId: 1,
      sanctuaryPetsId: ids
    };
    const updatedCart = await removeFromCart(updateCartDTO);
    setCart(updatedCart);
  };

  useEffect(() => {
    if (!isLoading) {
      setCart(_cart);
    }
  }, [isLoading, _cart]);

  if (cartError) throw new Error("erro no carrinho");

  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
