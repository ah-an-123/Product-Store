import path from "path";
import express from "express";
import productRouter from "./routers/product_router.js";
import "dotenv/config";
import connectDb from "./utils/db.js";
import cors from "cors";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// API Routes  ← must come before the catch-all
app.use("/api", productRouter);


// Production Setup  ← catch-all goes last
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start Server AFTER DB connects
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("✅ Database Connected");
    console.log(`🚀 Server running on port ${PORT}`);
  });
});