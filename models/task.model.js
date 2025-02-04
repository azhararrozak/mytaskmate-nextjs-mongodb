import mongoose, { models } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["Belum Selesai", "Sedang Proses", "Selesai"],
            default: "Belum Selesai",
        },
    }, 
    {
        timestamps: true,
    }
);

const Task = models.Task || mongoose.model("Task", taskSchema);

export default Task;