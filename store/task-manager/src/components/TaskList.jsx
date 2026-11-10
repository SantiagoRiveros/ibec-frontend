import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
  // Seleccionamos solo tasks del Store, Este mecanismo se conoce como selector.
  // No necesitamos todo el store si solamente queremos consultar las tareas.
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
}
