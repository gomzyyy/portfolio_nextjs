import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to MongoDB.");
    return;
  }
  if (!process.env.MONGO_DB_URI) {
    throw new Error("❌ MONGO_DB_URI is missing in environment variables.");
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
