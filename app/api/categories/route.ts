import prisma from "@/prisma/client";

export async function GET() {
  const data = await prisma.category.findMany();
  return Response.json({ success: "success", data });
}
