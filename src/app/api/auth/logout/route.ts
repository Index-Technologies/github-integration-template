import { NextRequest, NextResponse } from "next/server";
import { clearSession, deleteSessionCookie, sessionCookie } from "@/lib/auth";

export const POST = async (request: NextRequest) => {
  const token = request.cookies.get(sessionCookie)?.value;
  if (token) {
    await clearSession(token);
  }

  const response = NextResponse.json({ ok: true });
  deleteSessionCookie(response);

  return response;
}
