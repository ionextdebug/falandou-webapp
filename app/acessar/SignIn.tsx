"use client";

import { useFormState } from "react-dom";
import { createUser } from "../logic/actions/auth";

const initialState = {
  message: "",
};

export function SignIn() {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction}>
      <fieldset>
        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" name="email" required />
        <p aria-live="polite">{state?.message}</p>
      </fieldset>
      <fieldset>
        <label htmlFor="email">Senha:</label>
        <input type="text" id="email" name="email" required />
        <p aria-live="polite">{state?.message}</p>
      </fieldset>
      <button>Sign up</button>
    </form>
  );
}
