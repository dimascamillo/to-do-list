import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "./styles.css";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const newCycleFormValidationSchema = z.object({
  description: z.string().max(50, "O máximo de caracteres permitido são: 50"),
  completedTask: z.string(),
});

type NewTaskFormInputs = z.infer<typeof newCycleFormValidationSchema>;

export function NewTask() {
  const { createNewTask } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTaskFormInputs>({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  async function handleCreateNewTask(data: NewTaskFormInputs) {
    const { description, completedTask } = data;

    try {
      await createNewTask({
        description,
        completedTask,
      });

      console.log(data);

      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewTask)}
      className="container-input"
    >
      <input
        id="input-new-tasks"
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register("description")}
      />

      <select id="statusMyTasks" {...register("completedTask")}>
        <option value="">Status da Task</option>
        <option value="true">Finalizado</option>
        <option value="false">Em andamento</option>
      </select>

      <button className="button-newTask" type="submit" disabled={isSubmitting}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
