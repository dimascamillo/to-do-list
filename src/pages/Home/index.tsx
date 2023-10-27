/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, PlusCircle, Trash } from "@phosphor-icons/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import "./styles.css";
import { useState } from "react";

const newCycleFormValidationSchema = z.object({
  newTask: z.string().max(50, "O máximo de caracteres permitido são: 50"),
  // completeTask: z.boolean(),
});

type NewTaskFormInputs = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewTaskFormInputs>({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  const [myTasks, setMyTasks] = useState<string[]>([]);

  const [task] = watch(["newTask"]);

  function createNewTask(data: NewTaskFormInputs) {
    setMyTasks((prevTasks) => [...prevTasks, task]);
    console.log(myTasks);
    console.log(data);
  }

  function saveStatusTask(data: any) {
    console.log(data);
  }

  const isSubmitDisabled = !task; // auxiliary variable

  // const isSubmitTaskDisabled = !completeTask; // auxiliary variable

  return (
    <main id="container-content">
      <form onSubmit={handleSubmit(createNewTask)} className="container-input">
        <input
          id="input-new-tasks"
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register("newTask")}
        />

        <button type="submit" disabled={isSubmitDisabled}>
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <form id="container-tasks" onSubmit={handleSubmit(saveStatusTask)}>
        <header>
          <div className="container-tasks-create">
            <span className="tasks-description">Tarefas criadas</span>
            <span className="tasks-flag">0</span>
          </div>

          <div className="container-tasks-finished">
            <span className="tasks-description">Concluídas</span>
            <span className="tasks-flag">0 de 5</span>
          </div>
        </header>

        {myTasks.map((task) => {
          return (
            <div key={task} className="tasks-card">
              <div className="container-card">
                <label className="trigger-checkbox" htmlFor="completeTask">
                  <input
                    type="checkbox"
                    id="completeTask"
                    // {...register("completeTask")}
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
          <button type="submit">Salvar</button>
        </div>
      </form>
    </main>
  );
}
