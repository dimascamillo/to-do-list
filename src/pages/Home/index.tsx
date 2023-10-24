import {
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";

import "./styles.css";

export function Home() {
  return (
    <main id="container-content">
      <div className="container-input">
        <input
          id="input-new-tasks"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="button"
          disabled>
          Criar <PlusCircle size={16} />
        </button>
      </div>

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
            <label htmlFor="finished">
              fished task
            </label>
            <input
              type="checkbox"
              name="finished"
              id="finished"
            />
          </div>
          <p>
            Integer urna interdum massa libero
            auctor neque turpis turpis semper.
            Duis vel sed fames integer.
          </p>
          <button>
            <Trash size={12} />
          </button>
        </div>
      </section>
    </main>
  );
}
