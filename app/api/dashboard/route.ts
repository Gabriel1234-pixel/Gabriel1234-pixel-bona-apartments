import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    // Total apartments
    const [apartments]: any = await db.query(
      "SELECT COUNT(*) AS total FROM apartments"
    );

    // Available apartments
    const [available]: any = await db.query(
      "SELECT COUNT(*) AS total FROM apartments WHERE status='Available'"
    );

    // Occupied apartments
    const [occupied]: any = await db.query(
      "SELECT COUNT(*) AS total FROM apartments WHERE status='Occupied'"
    );

    // Total users
    const [users]: any = await db.query(
      "SELECT COUNT(*) AS total FROM users"
    );

    // Recent apartments
    const [recent]: any = await db.query(`
      SELECT
        id,
        apartment_name,
        apartment_type,
        price,
        status
      FROM apartments
      ORDER BY id DESC
      LIMIT 5
    `);

    // Recent users
    const [recentUsers]: any = await db.query(`
      SELECT
        id,
        full_name,
        email
      FROM users
      ORDER BY id DESC
      LIMIT 5
    `);

    return NextResponse.json({
      apartments: apartments[0].total,
      available: available[0].total,
      occupied: occupied[0].total,
      users: users[0].total,
      recent,
      recentUsers,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard statistics",
      },
      { status: 500 }
    );
  }
}