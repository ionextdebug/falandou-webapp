import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Use um e-mail válido, por favor." })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
      };
      message?: string;
    }
  | undefined;
