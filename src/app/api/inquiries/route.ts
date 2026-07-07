import { NextResponse } from "next/server";
import { openDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, notes } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await openDb();
    
    await db.run(
      `INSERT INTO inquiries (name, email, service, notes) VALUES (?, ?, ?, ?)`,
      [name, email, service, notes || ""]
    );

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await openDb();
    const inquiries = await db.all("SELECT * FROM inquiries ORDER BY created_at DESC");
    
    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
