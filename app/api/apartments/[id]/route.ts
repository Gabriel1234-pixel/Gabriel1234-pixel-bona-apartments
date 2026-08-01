import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// Get one apartment
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const [rows]: any = await db.query(
    "SELECT * FROM apartments WHERE id = ?",
    [id]
  );

  return NextResponse.json(rows[0]);
}

// Update apartment
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const {
    apartment_name,
    apartment_type,
    price,
    bedrooms,
    bathrooms,
    image,
    description,
    status,
  } = await req.json();

  await db.query(
    `UPDATE apartments
     SET apartment_name=?,
         apartment_type=?,
         price=?,
         bedrooms=?,
         bathrooms=?,
         image=?,
         description=?,
         status=?
     WHERE id=?`,
    [
      apartment_name,
      apartment_type,
      price,
      bedrooms,
      bathrooms,
      image,
      description,
      status,
      id,
    ]
  );

  return NextResponse.json({
    success: true,
    message: "Apartment updated successfully",
  });
}