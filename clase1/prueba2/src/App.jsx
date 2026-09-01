import "./App.css";
import AdiosMundo from "./components/AdiosMundo";
import Heading from "./components/Heading";
import HolaMundo from "./components/HolaMundo";

function App() {
  function Saludar(nombre) {
    console.log("Hola", nombre);
  }

  return (
    <>
      <Heading text="Hola Mundo" size={1} />
      <Heading text="Adios Mundo" size={2} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        repellendus numquam deserunt possimus dolores molestiae iste accusantium
        commodi, quas repellat porro. Earum commodi explicabo minus nostrum
        optio iusto animi corrupti.
      </p>
    </>
  );
}

export default App;
