import { ReactNode, createContext, useEffect, useState } from "react";

interface Task {
  id: number;
  description: string;
  completedTask: string;
}

interface TaskContextType {
  tasks: Task[];
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setMyTasks] = useState<Task[]>([]);

  async function loadMyTasks() {
    const response = await fetch("http://localhost:3333/tasks");
    const data = await response.json();

    setMyTasks(data);
  }

  useEffect(() => {
    loadMyTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
}
