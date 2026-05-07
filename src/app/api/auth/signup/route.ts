import { NextRequest, NextResponse } from "next/server";
import { createSession, createUser, findUserByEmail, setSessionCookie } from "@/lib/auth";

type SignupBody = {
  name?: string;
  email?: string;
  password?: string;
}

export const POST = async (request: NextRequest) => {
  const body = (await request.json()) as SignupBody;

  if (!body.name || !body.email || !body.password) {
    return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
  }

  const existing = await findUserByEmail(body.email);
  if (existing) {
    return NextResponse.json({ error: "That email already has an account." }, { status: 409 });
  }

  const user = await createUser(body.name, body.email, body.password);
  const token = await createSession(user.id);
  const response = NextResponse.json({ ok: true });
  setSessionCookie(response, token);

  return response;
}
