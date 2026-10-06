import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../data/products";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [mensaje, setMensaje] = useState("cargando");

  useEffect(() => {
    const productoElegido = products.find((prod) => prod.id == id);
    if (!productoElegido) {
      setMensaje("Producto no encontrado, redirigiendo en 3 segundos");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    setProducto(productoElegido);
  }, []);

  return (
    <>
      <h1>Detalle Producto</h1>

      {producto ? (
        <>
          <h3>{producto.nombre}</h3>
          <h4>${producto.precio}</h4>
          <p>{producto.descripcion}</p>
          <h6>Stock: {producto.stock}</h6>
        </>
      ) : (
        <p>{mensaje}</p>
      )}
      <button onClick={() => navigate(-1)}>Ir atras</button>
    </>
  );
}
