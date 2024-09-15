import { SignUpFormSchema, FormState } from "@/app/logic/lib/definitions";
import axios from "axios";

export function createUser(state: FormState, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
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
