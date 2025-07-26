import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://veluriyuvrajreddy:veluriyuvrajreddy@cluster0.vufpikc.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
