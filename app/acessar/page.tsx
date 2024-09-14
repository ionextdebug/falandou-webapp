"use client";

import { auth } from "@/app/logic/actions/auth";
import Nav from "../shared/components/nav";
import { useFormState } from "react-dom";

export default function Acessar() {
  const [state, action] = useFormState(auth, undefined);
  return (
    <>
      <Nav />
      <section className="h-screen flex items-center">
        <form className="max-w-sm mx-auto" action={action}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seu e-mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="exemplo@email.com"
              required
            />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirmar
          </button>
        </form>
      </section>
    </>
  );
}
