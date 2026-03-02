import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") || "World";
  return NextResponse.json({
    message: `Hello, ${name}!`,
    method: "GET",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = body.name || "World";
    return NextResponse.json({
      message: `Hello, ${name}!`,
      method: "POST",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
