import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// GET all apartments
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM apartments ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch apartments" },
      { status: 500 }
    );
  }
}

// POST new apartment
export async function POST(req: NextRequest) {
  try {
    const {
      apartment_name,
      apartment_type,
      price,
      bedrooms,
      bathrooms,
      image,
      description,
    } = await req.json();

    await db.query(
      `INSERT INTO apartments
      (apartment_name, apartment_type, price, bedrooms, bathrooms, image, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        apartment_name,
        apartment_type,
        price,
        bedrooms,
        bathrooms,
        image,
        description,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Apartment added successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add apartment",
      },
      { status: 500 }
    );
  }
}

// DELETE apartment
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await db.query("DELETE FROM apartments WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      message: "Apartment deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete apartment",
      },
      { status: 500 }
    );
  }
}