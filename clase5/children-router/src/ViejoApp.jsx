import "./App.css";
import Caja from "./components/containers/Caja";
import Contenedor from "./components/containers/Contenedor";
import Button from "./components/containers/Button";
import Layout from "./components/containers/Layout";

function App() {
  return (
    <Layout>
      <Contenedor>
        <p>Este contenido se lo paso como prop</p>
        {/* React interpreta este
        contenido de aca, como si fuera la prop children */}
      </Contenedor>
      <Caja>
        <h1>Esto esta dentro de la caja</h1>
      </Caja>

      <Caja>
        <label>Input en la caja</label>
        <input />
        <Button>
          <strong>BOTON DE CAJA</strong>
        </Button>
      </Caja>
    </Layout>
  );
}

export default App;
