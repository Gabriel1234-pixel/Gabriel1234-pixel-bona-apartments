import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM apartments ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Database Error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch apartments",
        error: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}