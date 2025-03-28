import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./db";
import authRoutes from "./routes/auth.route";
import campaignRoutes from "./routes/campaign.route";

dotenv.config();
const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", campaignRoutes);

const PORT = process.env.PORT || 3001;

const mother = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

mother();
