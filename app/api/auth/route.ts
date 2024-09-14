import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let json = {};
  try {
    const email: string | null = req.nextUrl.searchParams.get("email");

    json = await prisma.user.findFirst({ where: { email } });

    json.then()

  } catch (err) {
    return Response.json({})
  }
}
