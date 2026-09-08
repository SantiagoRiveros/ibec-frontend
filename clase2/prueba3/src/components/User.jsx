export default function User({
  nombre = "Juan",
  apellido = "Doe",
  edad = 20,
  ciudad = "New York",
}) {
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <h1>Apellido: {apellido}</h1>
      <h2>Edad: {edad}</h2>
      <h2>Ciudad: {ciudad}</h2>
    </div>
  );
}
