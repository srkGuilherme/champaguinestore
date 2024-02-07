import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAPI() {
      var response = await axios.get("http://localhost:3030/products");
      setProducts(response.data);
    }
    getAPI();
  }, {});

  const catalog = () => {};

  return (
    <div className="App">
      <Header></Header>
      <div className="Catalog">
        {" "}
        {products.map((product, title, price) => (
          <Product title={product.title} price={product.price}></Product>
        ))}
      </div>
      <Footer
        email="champaguinestore@store.com.br"
        phone="(47)97070-7070"
      ></Footer>
    </div>
  );
}

export default App;
