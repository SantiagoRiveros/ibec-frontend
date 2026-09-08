export default function ProductCard({
  nombre = "Anonimo",
  precio = 0,
  categoria = "Ninguna",
  onAgregar = () => {},
}) {
  return (
    <article>
      <h3>{nombre}</h3>
      <h3>${precio}</h3>
      <h3>Categoria: {categoria}</h3>
      <button
        onClick={() =>
          onAgregar({ nombre: nombre, precio: precio, categoria: categoria })
        }
      >
        Agregar al Carrito
      </button>
    </article>
  );
}
