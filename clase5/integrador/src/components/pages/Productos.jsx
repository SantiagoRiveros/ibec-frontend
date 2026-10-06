import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardLayout } from "../containers/";
import products from "../../data/products.js";

export default function Productos() {
  const navigate = useNavigate();
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    setListaProductos(products);
  }, []);
  return (
    <>
      <h1>Productos</h1>
      {listaProductos.length ? (
        listaProductos.map((producto) => (
          <CardLayout key={producto.id}>
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <p>{producto.descripcion}</p>
            <h6>Stock: {producto.stock}</h6>
            <button onClick={() => navigate("/producto/" + producto.id)}>
              Ir al detalle
            </button>
          </CardLayout>
        ))
      ) : (
        <p>Cargando</p>
      )}
    </>
  );
}
