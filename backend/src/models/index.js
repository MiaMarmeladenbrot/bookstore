import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function connectToDatabase() {
  const dbUrl = process.env.MONGO_URL;
  return mongoose.connect(dbUrl, { dbName: "shopDB" });
}
