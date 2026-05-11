import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
}