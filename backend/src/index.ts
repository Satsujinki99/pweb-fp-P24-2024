import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import connectDB from "./db-connection";
import authRoutes from "./routes/authRoutes";
import formatResponse from "./utils/formatResponse";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Sesuaikan dengan frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Connect to Database
connectDB();
app.get("/", (req: Request, res: Response) => {
  const date = new Date();
  const response = formatResponse("success", "Hello World", date);
  res.send(response);
});

// Routes
app.use("/login", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
