import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "./styles.css";

const newCycleFormValidationSchema = z.object({
  newTask: z.string().max(50, "O máximo de caracteres permitido são: 50"),
});

type NewTaskFormInputs = z.infer<typeof newCycleFormValidationSchema>;

export function NewTask() {
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

  const isSubmitDisabled = !task; // auxiliary variable

  return (
    <form onSubmit={handleSubmit(createNewTask)} className="container-input">
      <input
        id="input-new-tasks"
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register("newTask")}
      />

      <button
        className="button-newTask"
        type="submit"
        disabled={isSubmitDisabled}
      >
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
