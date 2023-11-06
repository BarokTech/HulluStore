import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../App";

function Cart() {
  const cart = useContext(CartContext);
  const cartContent = cart.cartContent;

  const handleCheckOut = () => {
    cart.setCartContent([]);
  };

  return (
    <div>
      <h4>Items:</h4>
      {cartContent.map((content) => (
        <CartItem key={content.id} id={content.id} />
      ))}
      <button onClick={handleCheckOut} className="bg-primary text-white ">
        Check out
      </button>
    </div>
  );
}

export default Cart;
