import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import thereNoTasks from "../../assets/thereNoTasks.svg";
import "./styles.css";

const newCycleTaskComplete = z.object({
  completeTask: z.boolean({
    required_error: "Sinalize a tarefa que está completa antes de salvar",
    invalid_type_error: "O completeTask é do tipo Boolean",
  }),
});

type CompleteTask = z.infer<typeof newCycleTaskComplete>;

export function MyTasks() {
  const { register, handleSubmit, watch } = useForm<CompleteTask>({
    resolver: zodResolver(newCycleTaskComplete),
  });

  const [myTasks, setMyTasks] = useState<string[]>(["a", "b", "c", "d", "e"]);

  const [inputTask] = watch(["completeTask"]);

  const isTaskFinished = !inputTask;

  function saveStatusTask(data: CompleteTask) {
    // setMyTasks((prevTasks) => [...prevTasks, task]);
    // console.log(myTasks);
    console.log(data);
  }

  return (
    <form id="container-tasks" onSubmit={handleSubmit(saveStatusTask)}>
      <header>
        <div className="container-tasks-create">
          <span className="tasks-description">Tarefas criadas</span>
          <span className="tasks-flag">{myTasks.length}</span>
        </div>

        <div className="container-tasks-finished">
          <span className="tasks-description">Concluídas</span>
          <span className="tasks-flag">0 de {myTasks.length}</span>
        </div>
      </header>

      {myTasks.map((task) => {
        return (
          <div key={task} className="tasks-card">
            <div className="container-card">
              <label className="trigger-checkbox" htmlFor={task}>
                <input
                  type="checkbox"
                  id={task}
                  className="completeTaskInput"
                  {...register("completeTask")}
                />
                <span className="check-mark">
                  <Check size={8} />
                </span>

                <p className="card-text">{task}</p>
              </label>
            </div>
            <button className="card-button">
              <Trash size={12} />
            </button>
          </div>
        );
      })}

      <div id="save-status-task">
        <button type="submit" disabled={isTaskFinished}>
          Salvar
        </button>
      </div>
    </form>
  );
}
