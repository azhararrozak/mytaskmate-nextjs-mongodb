import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user.model";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const { fullname, email, password } = await req.json();

    const hashedPassword = await bcryptjs.hash(password, 10);

    await connectMongoDB();
    await User.create({ fullname, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
