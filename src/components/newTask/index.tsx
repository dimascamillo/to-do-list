import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "./styles.css";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const newCycleFormValidationSchema = z.object({
  description: z.string().max(50, "O máximo de caracteres permitido são: 50"),
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
    const { description } = data;

    await createNewTask({
      description,
    });

    reset();
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

      <button className="button-newTask" type="submit" disabled={isSubmitting}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
