import { useRef, useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const nombreRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Validamos el nombre
    if (nombre.trim() === "") {
      setError("El nombre es obligatorio");

      // Accedemos directamente al input
      nombreRef.current.focus();

      return;
    }

    setError("");

    console.log({
      nombre,
      email,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear cuenta</h1>

      <div>
        <label htmlFor="nombre">Nombre</label>

        <input
          ref={nombreRef}
          id="nombre"
          type="text"
          value={nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">Registrarme</button>
    </form>
  );
}

export default Registro;
