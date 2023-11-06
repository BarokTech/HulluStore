import { products } from "../data/productData";
export const handleAdd = (id, cart) => {
  const added = products.find((product) => {
    return product.id === Number(id);
  });
  const content = [...cart.cartContent];
  console.log(content);
  const cartModified = [...content, added];
  cart.setCartContent(cartModified);
};
