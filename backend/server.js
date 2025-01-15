import express from "express";
import cors from "cors";
import 'dotenv/config'
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";


//! App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


//! Middlewares
app.use(express.json());
app.use(cors());


//! Api endpoints

app.use('/api/admin', adminRouter);  //todo: localhost:4000/api/admin/add-doctor


app.get("/", (req, res) => {
  res.send("API is established");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//! DataBase Connection

