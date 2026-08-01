import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [rows]: any = await db.query(
      `
      SELECT
        payments.id,
        payments.amount,
        payments.payment_date,
        payments.payment_method,
        payments.status,
        tenants.full_name,
        apartments.apartment_name
      FROM payments
      INNER JOIN tenants
        ON payments.tenant_id = tenants.id
      LEFT JOIN apartments
        ON tenants.apartment_id = apartments.id
      WHERE payments.id = ?
      `,
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load receipt",
      },
      { status: 500 }
    );
  }
}