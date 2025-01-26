import mongoose from "mongoose";

export const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(console.log("connected to DB"))
    .catch((err) => {
      throw new Error(
        err instanceof Error
          ? err.message
          : "Unable to connect to the mongoDB at the moment."
      );
    });
