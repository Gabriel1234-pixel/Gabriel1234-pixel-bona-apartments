import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// ========================
// GET ALL REQUESTS
// ========================
export async function GET() {
  try {

    const [rows]: any = await db.query(`
      SELECT
        maintenance_requests.id,
        maintenance_requests.title,
        maintenance_requests.description,
        maintenance_requests.status,
        maintenance_requests.created_at,
        tenants.full_name,
        apartments.apartment_name
      FROM maintenance_requests

      INNER JOIN tenants
      ON maintenance_requests.tenant_id = tenants.id

      INNER JOIN apartments
      ON maintenance_requests.apartment_id = apartments.id

      ORDER BY maintenance_requests.id DESC
    `);

    return NextResponse.json(rows);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load maintenance requests",
      },
      { status: 500 }
    );
  }
}

// ========================
// ADD REQUEST
// ========================
export async function POST(req: NextRequest) {
  try {

    const {
      tenant_id,
      apartment_id,
      title,
      description,
    } = await req.json();

    await db.query(
      `
      INSERT INTO maintenance_requests
      (
        tenant_id,
        apartment_id,
        title,
        description
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        tenant_id,
        apartment_id,
        title,
        description,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Maintenance request submitted successfully.",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit maintenance request.",
      },
      { status: 500 }
    );
  }
}