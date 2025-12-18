import products from "./products";
import Card from "./card";
import "./product.css";

const Products = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
