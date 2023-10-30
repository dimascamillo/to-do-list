/* eslint-disable @typescript-eslint/no-explicit-any */
import { MyTasks } from "../../components/myTasks";
import { NewTask } from "../../components/newTask";
import "./styles.css";

export function Home() {
  return (
    <main id="container-content">
      <NewTask />

      <MyTasks />
    </main>
  );
}
