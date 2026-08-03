import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// ====================
// GET ALL REQUESTS
// ====================
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM viewing_requests
      ORDER BY created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch requests." },
      { status: 500 }
    );
  }
}

// ====================
// CREATE REQUEST
// ====================
export async function POST(req: NextRequest) {
  try {
    const {
      full_name,
      email,
      phone,
      apartment_type,
      message,
    } = await req.json();

    await db.query(
      `
      INSERT INTO viewing_requests
      (
        full_name,
        email,
        phone,
        apartment_type,
        message
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        full_name,
        email,
        phone,
        apartment_type,
        message,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Viewing request submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error." },
      { status: 500 }
    );
  }
}

// ====================
// UPDATE STATUS
// ====================
export async function PUT(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    await db.query(
      `
      UPDATE viewing_requests
      SET status=?
      WHERE id=?
      `,
      [status, id]
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Update failed." },
      { status: 500 }
    );
  }
}

// ====================
// DELETE REQUEST
// ====================
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    await db.query(
      `
      DELETE FROM viewing_requests
      WHERE id=?
      `,
      [id]
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Delete failed." },
      { status: 500 }
    );
  }
}