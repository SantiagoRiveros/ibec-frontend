import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {products.length ? (
        products.map((product) => {
          return (
            <article key={product.id}>
              <h2>{product.title}</h2>
              {product.price >= 50 ? (
                <h4 className="expensive">${product.price} (CARO)</h4>
              ) : (
                <h4 className="cheap">${product.price} (BARATO)</h4>
              )}
              <img src={product.image} alt="imagen" />
              <h5>Categoria: {product.category}</h5>
              <p>{product.description}</p>
            </article>
          );
        })
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export default App;
