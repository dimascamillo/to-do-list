// import { zodResolver } from "@hookform/resolvers/zod";
import { Check, FloppyDisk, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import thereNoTasks from "../../assets/thereNoTasks.svg";
import "./styles.css";
import { TaskContext } from "../../contexts/TasksContext";

// const newCycleTaskComplete = z.object({
//   completeTask: z.boolean({
//     required_error: "Sinalize a tarefa que está completa antes de salvar",
//     invalid_type_error: "O completeTask é do tipo Boolean",
//   }),
// });

export function MyTasks() {
  const { tasks } = useContext(TaskContext);

  const statusMyTasks = tasks.reduce((result, item) => {
    if (item.completedTask === "true") {
      return result + 1;
    }
    return result;
  }, 0);

  // const { register, handleSubmit, watch } = useForm<newCycleTaskComplete>({
  //   resolver: zodResolver(newCycleTaskComplete),
  // });

  // const [inputTask] = watch(["completeTask"]);

  // const isTaskFinished = !inputTask;

  // function saveStatusTask(data: CompleteTask) {
  //   // setMyTasks((prevTasks) => [...prevTasks, task]);
  //   // console.log(myTasks);
  //   console.log(data);
  // }

  return (
    <form id="container-tasks">
      <header>
        <div className="container-tasks-create">
          <span className="tasks-description">Tarefas criadas</span>
          <span className="tasks-flag">{tasks.length}</span>
        </div>

        <div className="container-tasks-finished">
          <span className="tasks-description">Concluídas</span>
          <span className="tasks-flag">
            {statusMyTasks} de {tasks.length}
          </span>
        </div>
      </header>

      {tasks.map((task) => {
        return (
          <div key={task.id} className="tasks-card">
            <div className="container-card">
              <label className="trigger-checkbox" htmlFor={task.description}>
                <input
                  type="checkbox"
                  id={task.description}
                  className="completeTaskInput"
                />
                <span className="check-mark">
                  <Check size={8} />
                </span>

                <p className="card-text">{task.description}</p>
              </label>
            </div>
            <div className="container-buttons">
              <button className="card-button save">
                <FloppyDisk size={12} />
              </button>
              <button className="card-button">
                <Trash size={12} />
              </button>
            </div>
          </div>
        );
      })}
    </form>
  );
}
