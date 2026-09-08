export default function Contador({ contador, setContador }) {
  return (
    <>
      <h2>{contador}</h2>

      <button onClick={() => setContador(contador + 1)}>+</button>
    </>
  );
}
