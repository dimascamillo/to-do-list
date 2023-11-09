import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Task {
  id: number;
  description: string;
  completedTask: string;
}

interface CreateNewTask {
  description: string;
  completedTask: string;
}
interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  createNewTask: (data: CreateNewTask) => Promise<void>;
  deleteTask: (data: Task) => Promise<void>;
  patchTask: (data: Task) => Promise<void>;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setMyTasks] = useState<Task[]>([]);

  async function fetchTasks() {
    const response = await api.get("/tasks");

    setMyTasks(response.data);
  }

  async function createNewTask(data: CreateNewTask) {
    const { description, completedTask } = data;

    const response = await api.post("/tasks", {
      description,
      completedTask,
    });

    setMyTasks((state) => [response.data, ...state]);
  }

  async function deleteTask(data: Task) {
    const { id } = data;

    await api.delete(`/tasks/${id}`);

    setMyTasks((state) => state.filter((task) => task.id !== id));
  }

  async function patchTask(data: Task) {
    const { id, completedTask } = data;

    await api.patch(`/tasks/${id}`);

    setMyTasks((state) =>
      state.filter((task) => (task.completedTask = completedTask))
    );
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTasks, createNewTask, deleteTask, patchTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
