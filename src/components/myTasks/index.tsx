import { Check, FloppyDisk, Trash } from "@phosphor-icons/react";
import { useContext } from "react";

import "./styles.css";

import { useTasks } from "../../hooks/useTasks";
import { TaskContext } from "../../contexts/TasksContext";

export function MyTasks() {
  const { tasks } = useContext(TaskContext);

  const task = useTasks();

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
            {task} de {tasks.length}
          </span>
        </div>
      </header>

      {tasks.map((task) => {
        const identifierMyTask = task.description + task.id;
        return (
          <div key={task.id} className="tasks-card">
            <div className="container-card">
              <label className="trigger-checkbox" htmlFor={identifierMyTask}>
                <input
                  type="checkbox"
                  id={identifierMyTask}
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
