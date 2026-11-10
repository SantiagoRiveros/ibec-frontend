import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  // Aca Accedemos a una accion del store, no necesitamos recibirla por prop.
  const addTask = useTaskStore((state) => state.addTask);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    addTask(title);

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva Tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="Submit">Agregar Tarea</button>
    </form>
  );
}
