import {
  Check,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import "./styles.css";

export function Home() {
  const { register, handleSubmit, watch } =
    useForm({});

  function createNewTask(data: any) {}

  const task = watch("newTask");
  const isSubmitDisabled = !task; // auxiliary variable

  return (
    <main id="container-content">
      <form
        onSubmit={handleSubmit(createNewTask)}
        className="container-input">
        <input
          id="input-new-tasks"
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register("newTask")}
        />

        <button
          type="button"
          disabled={isSubmitDisabled}>
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <section id="container-tasks">
        <header>
          <div className="container-tasks-create">
            <span className="tasks-description">
              Tarefas criadas
            </span>
            <span className="tasks-flag">0</span>
          </div>

          <div className="container-tasks-finished">
            <span className="tasks-description">
              Concluídas
            </span>
            <span className="tasks-flag">
              0 de 5
            </span>
          </div>
        </header>

        <div className="tasks-card">
          <div className="container-card">
            <label
              className="trigger-checkbox"
              htmlFor="finished">
              <input
                type="checkbox"
                name="finished"
                id="finished"
              />
              <span className="check-mark">
                <Check size={8} />
              </span>

              <p className="card-text">
                Integer urna interdum massa libero
                auctor neque turpis turpis semper.
                Duis vel sed fames integer.
              </p>
            </label>
          </div>
          <button className="card-button">
            <Trash size={12} />
          </button>
        </div>
      </section>
    </main>
  );
}
