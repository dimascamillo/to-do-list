import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import "./styles.css";

const newCicleformValidationSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type NewCicleFormData = z.infer<
  typeof newCicleformValidationSchema
>;

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
  } = useForm<NewCicleFormData>({
    resolver: zodResolver(
      newCicleformValidationSchema,
    ),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(formState.errors);

  function handleCreateNewUser(
    data: NewCicleFormData,
  ) {
    console.log(data);
    reset();
  }

  const password = watch("password");
  const isSubmitDisable = !password;

  return (
    <main id="container-login">
      <form
        onSubmit={handleSubmit(
          handleCreateNewUser,
        )}>
        <input
          type="email"
          placeholder="Insira o seu Email"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Insira a sua Senha"
          {...register("password")}
        />

        <button
          type="submit"
          disabled={isSubmitDisable}>
          Login
        </button>

        <span>
          Ainda não possui conta?
          <Link to={"/Register"}>
            Registre-se
          </Link>
        </span>
      </form>
    </main>
  );
}
