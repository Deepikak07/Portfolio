import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Contact form submissions are temporarily disabled." },
    { status: 200 }
  );
}

export async function POST() {
  return NextResponse.json(
    { message: "Contact form submissions are temporarily disabled." },
    { status: 200 }
  );
}
