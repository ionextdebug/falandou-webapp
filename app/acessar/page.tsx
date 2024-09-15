"use client";

import Nav from "../shared/components/nav";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export default function Acessar() {
  return (
    <>
      <Nav />
      <section className="h-screen flex items-center">
        <SignUp />
        <SignIn />
      </section>
    </>
  );
}
