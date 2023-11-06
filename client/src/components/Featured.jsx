import ProductCard from "./ProductCard";
import { products } from "../data/productData";
import { useState } from "react";
function Featured() {
  const featuredProducts = products.filter((product) => {
    return product.rating.rate > 4;
  });
  // eslint-disable-next-line no-unused-vars
  const [featured, setFeatured] = useState(featuredProducts);
  // setFeatured(featuredProducts);

  return (
    <div className="mt-5">
      <h3>Featured </h3>
      <div className="d-flex flex-wrap mt-3">
        {featured.map((item) => (
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
  );
}

export default Featured;
