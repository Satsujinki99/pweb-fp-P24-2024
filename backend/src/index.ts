import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db-connection";
import authRoutes from "./routes/authRoutes";
import formatResponse from "./utils/formatResponse";

dotenv.config(); // Pastikan JWT_SECRET dan konfigurasi lainnya terbaca

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Sesuaikan dengan URL frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Connect to Database
connectDB();

// Test Route
app.get("/", (req: Request, res: Response) => {
  const date = new Date();
  const response = formatResponse("success", "Hello World", date);
  res.send(response);
});

// Auth Routes
app.use("/auth", authRoutes);

// Error Handling
app.use((err: Error, req: Request, res: Response, next: Function) => {
  res.status(500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
