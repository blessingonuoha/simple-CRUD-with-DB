import express from "express";
import mongoose from "mongoose";
import { postRoutes } from "./routes/post.js";
import "dotenv/config";

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", postRoutes);

// Database
mongoose
 .connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zmbxesy.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster0`
 )
 .then(() => {
  console.log("========== Connected to Databse ==========");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 })
 .catch(() => console.log("XXXXXXXXX Connected failed XXXXXXXXXX"));
