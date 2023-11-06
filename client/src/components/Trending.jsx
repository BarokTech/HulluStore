import ProductCard from "./ProductCard";
import { products } from "../data/productData";

function Trending() {
  const trendingProducts = products.filter((product) => {
    return product.numberSold > 70;
  });

  return (
    <div className="mt-5">
      <h3>Trending</h3>
      <div className="d-flex flex-wrap mt-3">
        {trendingProducts.map((item) => (
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

export default Trending;
