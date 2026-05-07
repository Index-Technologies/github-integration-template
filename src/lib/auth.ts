import crypto from "crypto";
import type { NextRequest, NextResponse } from "next/server";
import { createId, hashPassword, query } from "@/lib/db";
import type { User } from "@/lib/types";

export const sessionCookie = "myapp_session";

type UserRow = User & {
  password_hash: string;
}

export const findUserByEmail = async (email: string) => {
  const rows = await query<UserRow>(
    "select id, name, email, role, password_hash from users where lower(email) = lower($1)",
    [email],
  );

  return rows[0];
}

export const createUser = async (name: string, email: string, password: string) => {
  const user = {
    id: createId(),
    name,
    email,
    role: "Product Manager",
  };

  await query(
    `insert into users (id, name, email, role, password_hash)
     values ($1, $2, $3, $4, $5)`,
    [user.id, user.name, user.email, user.role, hashPassword(password)],
  );

  return user;
}

export const verifyPassword = (user: UserRow, password: string) => {
  const expected = Buffer.from(user.password_hash);
  const actual = Buffer.from(hashPassword(password));

  if (expected.length !== actual.length) {
    return false;
  }

  return crypto.timingSafeEqual(expected, actual);
}

export const createSession = async (userId: string) => {
  const token = createId();
  await query(
    "insert into sessions (token, user_id, expires_at) values ($1, $2, now() + interval '7 days')",
    [token, userId],
  );

  return token;
}

export const clearSession = async (token: string) => {
  await query("delete from sessions where token = $1", [token]);
}

export const getRequestUser = async (request: NextRequest) => {
  const token = request.cookies.get(sessionCookie)?.value;
  if (!token) {
    return undefined;
  }

  const rows = await query<User>(
    `select users.id, users.name, users.email, users.role
     from sessions
     join users on users.id = sessions.user_id
     where sessions.token = $1 and sessions.expires_at > now()`,
    [token],
  );

  return rows[0];
}

export const setSessionCookie = (response: NextResponse, token: string) => {
  response.cookies.set(sessionCookie, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export const deleteSessionCookie = (response: NextResponse) => {
  response.cookies.set(sessionCookie, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
