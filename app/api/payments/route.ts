import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// =======================
// GET ALL PAYMENTS
// =======================
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT
        payments.id,
        tenants.full_name,
        apartments.apartment_name,
        payments.amount,
        payments.payment_date,
        payments.payment_method,
        payments.status
      FROM payments
      INNER JOIN tenants
        ON payments.tenant_id = tenants.id
      LEFT JOIN apartments
        ON tenants.apartment_id = apartments.id
      ORDER BY payments.id DESC
    `);

    return NextResponse.json(rows);

  } catch (error) {
    console.error("GET Payments Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load payments",
      },
      { status: 500 }
    );
  }
}

// =======================
// ADD PAYMENT
// =======================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Received payment data:", body);

    const tenant_id = Number(body.tenant_id);

    const amount = Number(body.amount);

    const payment_date = body.payment_date;

    const payment_method = body.payment_method;

    const status = body.status;

    // Check if tenant exists
    const [tenant]: any = await db.query(
      "SELECT id FROM tenants WHERE id = ?",
      [tenant_id]
    );

    if (tenant.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Selected tenant does not exist.",
        },
        { status: 400 }
      );
    }

    // Save payment
    await db.query(
      `
      INSERT INTO payments
      (
        tenant_id,
        amount,
        payment_date,
        payment_method,
        status
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        tenant_id,
        amount,
        payment_date,
        payment_method,
        status,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Payment recorded successfully.",
    });

  } catch (error: any) {

    console.error("POST Payments Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}