import { SignupFormSchema, FormState } from "@/app/logic/lib/definitions";
import { signinEmail } from "./signinEmail";

export function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  signinEmail({email: validatedFields.data.email});

}
