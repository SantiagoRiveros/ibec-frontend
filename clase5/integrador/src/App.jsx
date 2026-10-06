import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/containers";
import { Home, Productos, Contacto, DetalleProducto } from "./components/pages";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </Layout>
  );
}

export default App;
