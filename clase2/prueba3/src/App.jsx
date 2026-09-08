import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Boton from "./components/Boton";
import Card from "./components/Card";
import Contador from "./components/Contador";

function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  return (
    <>
      <Boton state={contador} setter={setContador} text="+" />
      <p>{contador}</p>
      <Boton state={contador} setter={setContador} text="-" />
      {contador >= 10 ? <p>Demasiados clicks</p> : null}
      <User
        nombre="Santiago"
        apellido="Riveros"
        edad={33}
        ciudad="Berazategui"
      />
      <User />
      <Card
        titulo="pasar html como prop"
        contenido={<p>Este es contenido pasado como prop</p>}
      />
      <Contador contador={contador2} setContador={setContador2} />
    </>
  );
}

export default App;
