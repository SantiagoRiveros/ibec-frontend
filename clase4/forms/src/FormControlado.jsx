import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    edad: 0,
    password: "",
  });
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState(0);
  const [password, setPassword] = useState("");

  function manejarSubmit(event) {
    event.preventDefault();
    console.log("Formulario enviado");
    console.log(nombre);
    console.log(email);
    console.log(edad);
    console.log(password);

    console.log(user);
  }

  function handleChange(event) {
    setUser({
      ...user, // Copiame TODO de user, es como decir user = user y ademas...
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={manejarSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={user.nombre}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={user.email}
        onChange={handleChange}
      />
      <label htmlFor="edad">Edad</label>
      <input
        id="edad"
        name="edad"
        type="number"
        value={user.edad}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={user.password}
        onChange={handleChange}
      />
      <button type="submit">Registrarme</button>
    </form>
  );
}

export default App;
