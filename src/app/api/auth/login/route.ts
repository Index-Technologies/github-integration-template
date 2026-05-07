import { NextRequest, NextResponse } from "next/server";
import { createSession, findUserByEmail, setSessionCookie, verifyPassword } from "@/lib/auth";

type LoginBody = {
  email?: string;
  password?: string;
}

export const POST = async (request: NextRequest) => {
  const body = (await request.json()) as LoginBody;

  if (!body.email || !body.password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = await findUserByEmail(body.email);
  if (!user) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  if (!verifyPassword(user, body.password)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const token = await createSession(user.id);
  const response = NextResponse.json({ ok: true });
  setSessionCookie(response, token);

  return response;
}
