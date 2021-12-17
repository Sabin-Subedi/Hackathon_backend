import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// ! Connects DataBase
connectDB();

const app = express();

app.use(cors({}));

app.use(express.json());

app.use("/v1/auth/", authRoutes);
// app.use("/v1/", postRoutes);
// app.use("/v1/", profileRoutes);
// app.use("/v1/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Server is running.......");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`SERVER IS RUNNING ON PORT https://localhost:${PORT}`);
  }
});
