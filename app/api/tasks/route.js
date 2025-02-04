import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task.model";

export async function POST(req) {
    try {
        const { title, description } = await req.json();
    
        await connectMongoDB();
        await Task.create({ title, description });
    
        return NextResponse.json(
        { message: "Task added successfully" },
        { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const tasks = await Task.find();
    
        return NextResponse.json({ tasks });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}