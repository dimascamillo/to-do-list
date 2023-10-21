import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function Login() {
  const [output, setOutput] = useState();

  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main id="container-login">
      <form onSubmit={handleSubmit(createUser)}>
        <input
          type="email"
          {...register("email")}
        />

        <input
          type="password"
          {...register("password")}
        />

        <button type="submit">Login</button>

        <span>
          Ainda não possui conta?
          <Link to={"/Register"}>
            Registre-se
          </Link>
        </span>
      </form>
      <pre>{output}</pre>
    </main>
  );
}
