import "./Home.css";
import products from "./products";
import Card from "./card";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to SparkHaven</h1>
      <p>Your one-stop shop for smart gadgets</p>

      <h2 className="section-title">Featured Products</h2>

      <div className="home-products">
        {products.slice(0, 8).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

