import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect(`${process.env.DATABASE_URI}/prescripto`);
    console.log("Database connected successfully");
}
