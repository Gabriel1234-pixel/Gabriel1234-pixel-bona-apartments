import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return NextResponse.json({
  success: true,
  message: "Login successful",
  user: {
    id: rows[0].id,
    full_name: rows[0].full_name,
    email: rows[0].email,
    role: rows[0].role,
  },
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      { status: 500 }
    );
  }
}