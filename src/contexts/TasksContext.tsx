import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Task {
  id: number;
  description: string;
  completedTask: string;
}

interface CreateNewTask {
  description: string;
}

interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  createNewTask: (data: CreateNewTask) => Promise<void>;
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
    const { description } = data;

    const response = await api.post("/tasks", {
      description,
    });

    setMyTasks((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, createNewTask }}>
      {children}
    </TaskContext.Provider>
  );
}
