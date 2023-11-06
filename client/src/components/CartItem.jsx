import { useContext } from "react";
import { products } from "../data/productData";
import { CartContext } from "../App";
// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CartItem({ id }) {
  // console.log(products[id])
  const index = id ? id - 1 : 0;
  const product = products[index];
  const cart = useContext(CartContext);
  // console.log(cart);

  const handleDelete = (id) => {
    const content = cart.cartContent.filter((item) => {
      return item.id !== id;
    });
    cart.setCartContent(content);
  };

  return (
    <>
      <div className="container border border-radius-2 mb-2 ">
        <div className="row">
          <div className="col-2 w-10">
            {
              <img
                src={product.image}
                style={{ width: 50, height: 50 }}
                alt=""
              />
            }
          </div>
          <div className="col">
            <div className="col">{product.title}</div>
            <div className="col">{product.price}$</div>
          </div>
          <div className="col-1">
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-danger text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
