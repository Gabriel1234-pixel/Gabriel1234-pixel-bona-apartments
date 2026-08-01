import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { full_name, email, phone, password } = await req.json();

    await db.query(
      `INSERT INTO users (full_name, email, phone, password)
       VALUES (?, ?, ?, ?)`,
      [full_name, email, phone, password]
    );

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
      },
      { status: 500 }
    );
  }
}