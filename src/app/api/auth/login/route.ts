import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAIL = "abdialiaa200@gmail.com";
const ADMIN_PASSWORD = "Abdi@2024";
const ADMIN_TOKEN = "abdi-admin-2024";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true, token: ADMIN_TOKEN });
    }

    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
