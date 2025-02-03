import mongoose from "mongoose";

//connection to mongodb using monggose
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("An error occurred", error);
    }
}