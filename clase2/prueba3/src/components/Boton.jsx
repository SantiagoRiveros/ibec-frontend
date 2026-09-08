export default function Boton({ state, setter, text }) {
  if (text === "+") {
    return <button onClick={() => setter(state + 1)}>{text}</button>;
  } else return <button onClick={() => setter(state - 1)}>{text}</button>;
}
