/* eslint-disable @typescript-eslint/no-explicit-any */
import { MyTasks } from "../../components/myTasks";
import { NewTask } from "../../components/newTask";
import { TasksProvider } from "../../contexts/TasksContext";
import "./styles.css";

export function Home() {
  return (
    <main id="container-content">
      <TasksProvider>
        <NewTask />

        <MyTasks />
      </TasksProvider>
    </main>
  );
}
