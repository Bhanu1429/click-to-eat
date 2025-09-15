import mongoose from "mongoose";

export const connectDB = async () => {
  // This line now correctly uses the MONGO_URI from your .env file.
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"));
};
