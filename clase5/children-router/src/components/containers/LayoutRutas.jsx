import { NavLink } from "react-router-dom";

export default function LayoutRutas({ children }) {
  return (
    <>
      <nav>
        TechStore
        <NavLink to="/">Home</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
      <main>{children}</main>
      <footer>Pie de mi aplicacion</footer>
    </>
  );
}
