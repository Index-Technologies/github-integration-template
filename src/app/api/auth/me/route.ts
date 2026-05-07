import { NextRequest, NextResponse } from "next/server";
import { getRequestUser } from "@/lib/auth";

export const GET = async (request: NextRequest) => {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  return NextResponse.json({ user });
}
