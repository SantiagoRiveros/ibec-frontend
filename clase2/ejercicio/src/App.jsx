import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
    /*  let aux = carrito;
    aux.push(producto); // push es para agregar al final de un array une lemento nuevo
    setCarrito(); */
  }

  return (
    <>
      <Header />
      <ProductCard
        nombre="Teclado Mecanico"
        precio={45000}
        categoria="Perifericos"
        onAgregar={agregarAlCarrito}
      />
      <ProductCard
        nombre="Mouse Gamer"
        precio={25000}
        categoria="Perifericos"
        onAgregar={agregarAlCarrito}
      />
      <ProductCard
        nombre="Auriculares"
        precio={30000}
        categoria="Audio"
        onAgregar={agregarAlCarrito}
      />
      <h1>CARRITO</h1>
      {carrito.length ? carrito.map((item) => <p>{item.nombre}</p>) : null}
    </>
  );
}

export default App;
