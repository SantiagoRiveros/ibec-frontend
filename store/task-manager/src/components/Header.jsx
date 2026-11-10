import { useTaskStore } from "../store/taskStore";

export default function Header() {
  const tasks = useTaskStore((state) => state.tasks);

  const pending = tasks.filter((task) => !task.completed).length;

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <header>
      <h1>Mi lista de tareas</h1>
      <p>Total: {tasks.length}</p>
      <p>Pendientes: {pending}</p>
      <p>Completadas: {completed}</p>
    </header>
  );
}
