import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Use um e-mail válido, por favor." })
      .trim(),
    fullName: z.string().trim(),
    password: z.string().trim(),
    repassword: z.string().trim(),
  })
  .refine(
    (schema) => schema.password === schema.repassword,
    {
      message: "Passwords don't match",
      path: ["repassword"],
  }
  );

export type FormState =
  | {
      errors?: {
        email?: string[];
      };
      message?: string;
    }
  | undefined;
