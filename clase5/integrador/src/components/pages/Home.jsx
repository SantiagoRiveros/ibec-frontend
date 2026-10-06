import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Inicio</h1>

      <button onClick={() => navigate("/productos")}>
        Vea nuestras ofertas
      </button>
    </>
  );
}
