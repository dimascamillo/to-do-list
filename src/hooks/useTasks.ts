import { useContext } from "react";
import { TaskContext } from "../contexts/TasksContext";

export function useTasks() {
  const { tasks } = useContext(TaskContext);

  const statusMyTasks = tasks.reduce((result, item) => {
    if (item.completedTask === "true") {
      return result + 1;
    }
    return result;
  }, 0);

  return statusMyTasks
}