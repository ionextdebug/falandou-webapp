import { SignupFormSchema, FormState } from "@/app/logic/lib/definitions";
import axios from "axios";

export function auth(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  axios
    .get("/api/auth", {
      params: {email: validatedFields.data.email}
    })
    .then((res) => console.log(res))
    .catch((res) => console.info(res));
}
