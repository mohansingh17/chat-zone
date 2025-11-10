import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
const PORT = process.env.PORT || 4001;
const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send({ message: "API is running..." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
