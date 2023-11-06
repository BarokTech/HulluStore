import ProductCard from "./ProductCard";
import { products } from "../data/productData";
// eslint-disable-next-line react/prop-types
function Filtered({ selected }) {
  const filteredProds = products.filter((product) => {
    return product.category === selected;
  });

  return (
    <>
      <div className=" mt-5">
        <h3>{selected} </h3>
        <div className="d-flex flex-wrap mt-3">
          {filteredProds.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              imgUrl={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Filtered;
