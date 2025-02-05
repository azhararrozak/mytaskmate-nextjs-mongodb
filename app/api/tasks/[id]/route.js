import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task.model";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await connectMongoDB();
    const task = await Task.findById(id);

    return NextResponse.json({ task });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = await params;

  try {
    const { title, description, status } = await req.json();

    await connectMongoDB();
    await Task.findByIdAndUpdate(id, { title, description, status });

    return NextResponse.json({ message: "Task updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    await connectMongoDB();
    await Task.findByIdAndDelete(id);

    return NextResponse.json({ message: "Task deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
