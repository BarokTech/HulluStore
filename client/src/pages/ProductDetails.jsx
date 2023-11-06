import { useParams } from "react-router";
import { products } from "../data/productData";
import { useNavigate } from "react-router";
import { handleAdd } from "../helpers/handleAdd";
import { useContext } from "react";
import { CartContext } from "../App";
function ProductDetails() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(products);
  const product = products.find((item) => {
    return item.id === Number(id);
  });

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <h3>Product Detail</h3>
      <div
        className="card m-2"
        style={{ justifyContent: "center", width: 800 }}
      >
        <img
          src={product.image}
          style={{ width: 300, height: 230 }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.category}</p>
          <button
            onClick={() => handleAdd(id, cart)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button onClick={handleClick}>Back</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
