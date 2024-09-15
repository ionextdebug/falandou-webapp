import { SignUpFormSchema } from "@/app/logic/lib/definitions";
import APIInterface from "@/app/shared/types/APIInterface";
import prisma from "@/prisma/client";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const response: APIInterface = {
    status: "failed",
  };
  try {
    const { email, password, repassword, fullName } = await request.json();
    
    const validatedFields = SignUpFormSchema.safeParse({
        email,
        password,
        repassword,
        fullName,
    })

    console.log(validatedFields.error?.flatten().fieldErrors)

  } catch (err) {
    response.data = err;
  } finally {
    return Response.json(response);
  }
}
