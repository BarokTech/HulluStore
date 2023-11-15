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
    <div className="container mt-5">
      <h4>Your Cart</h4>
      <div className="card">
        <ul className="list-group list-group-flush">
          {cartContent.map((content) => (
            <CartItem key={content.id} id={content.id} />
          ))}
        </ul>
        <div className="card-body">
          <button onClick={handleCheckOut} className="btn btn-primary">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
