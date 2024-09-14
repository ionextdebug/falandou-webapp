import { Resend } from "resend";
import { EmailTemplate } from "../lib/email_template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function signinEmail(dto: { email: string }) {
  const { email } = dto;
  const { data, error } = await resend.emails.send({
    from: "signin@falandouplay.com",
    to: [email],
    subject: "Acesso",
    react: EmailTemplate({ firstName: "John" }),
  });

  return { data, error };
}
