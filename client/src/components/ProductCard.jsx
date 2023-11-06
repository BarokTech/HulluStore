import { CartContext } from "../App";
import { useContext } from "react";
import { products } from "../data/productData";
import { useNavigate } from "react-router";
/* eslint-disable react/prop-types */
function ProductCard({ imgUrl, title, price, id }) {
  const cart = useContext(CartContext);
  const cartContent = cart.cartContent;

  const navigate = useNavigate();
  // const handleCheckOut = () => {
  //   cart.setCartContent([]);
  // };

  const handleAdd = (id) => {
    const added = products.find((product) => {
      return product.id === id;
    });
    const content = [...cartContent];
    const cartModified = [...content, added];
    cart.setCartContent(cartModified);
  };

  const handleClick = (id) => {
    navigate(`/product-detail/${id}`, { replace: true });
  };

  return (
    <>
      <div className="card m-2" style={{ width: 250 }}>
        <img
          onClick={() => handleClick(id)}
          src={imgUrl}
          style={{ width: 200, height: 230 }}
          className="card-img-top"
          alt="..."
        />
        <div onClick={() => handleClick(id)} className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">A comportable woolen t-shirt</p>
          <p className="card-text">{price}</p>
        </div>
        <button
          style={{ width: 120, marginLeft: 55, marginBottom: 10 }}
          onClick={() => handleAdd(id, cartContent)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
