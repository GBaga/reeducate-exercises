import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://admin:admin@reeducate-homework17.opi9pao.mongodb.net/?appName=reeducate-homework17";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
  }
}
