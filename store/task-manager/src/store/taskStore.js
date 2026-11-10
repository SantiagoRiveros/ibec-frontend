import { create } from "zustand";

// Creamos el store

export const useTaskStore = create((set) => ({
  tasks: [],

  // Agregamos un action.
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          title: title,
          completed: false,
        },
      ],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),
}));

/* 
create: crea el store
useTaskStore: es el hook que usaremos desde lso componentes.
set: permite actualizar el estado
tasks: es nuestrado estado inicial, un array vacio.
el nombre useTaskStore es una convencion que usamos porquese trata de un hook de React.

¿Que hace set?
es una funcion que permite actualizar el estado del Store.

¿Que hace state?
representa el estado actual del store.

¿Porque usamos ...state.tasks?
Porque necesitamos conservar las tareas existentes y agregar una nueva al final.

¿Porque no usamos push()?
Porque React y Zustand trabajan mejor con actualizaciones inmutables. No queremos modificar
directamente el array original

¿Que es Date.now()?
Genera un numero basado en la fecha y hora actual, que utilizamos como identificador
sencillo para nuestra tarea.


*/
