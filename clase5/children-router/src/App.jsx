import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Contacto, Home, Productos } from "./components/pages/";
import LayoutRutas from "./components/containers/LayoutRutas";

function App() {
  return (
    <>
      <LayoutRutas>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </LayoutRutas>
    </>
  );
}

export default App;
