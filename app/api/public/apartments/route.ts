import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM apartments ORDER BY id DESC"
    );

    return NextResponse.json(Array.isArray(rows) ? rows : []);
  } catch (error: any) {
    console.error("Database Error:", error);

    return NextResponse.json([], { status: 200 });
  }
}