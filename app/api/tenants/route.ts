import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// GET all tenants
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT
        tenants.*,
        apartments.apartment_name
      FROM tenants
      LEFT JOIN apartments
      ON tenants.apartment_id = apartments.id
      ORDER BY tenants.id DESC
    `);

    return NextResponse.json(rows);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load tenants",
      },
      { status: 500 }
    );
  }
}

// ADD tenant
export async function POST(req: NextRequest) {
  try {
    const {
      full_name,
      phone,
      email,
      national_id,
      apartment_id,
      move_in_date,
    } = await req.json();

    await db.query(
      `INSERT INTO tenants
      (full_name, phone, email, national_id, apartment_id, move_in_date)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        full_name,
        phone,
        email,
        national_id,
        apartment_id,
        move_in_date,
      ]
    );
    await db.query(
  "UPDATE apartments SET status = 'Occupied' WHERE id = ?",
  [apartment_id]
);

    return NextResponse.json({
      success: true,
      message: "Tenant added successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add tenant",
      },
      { status: 500 }
    );
  }
}