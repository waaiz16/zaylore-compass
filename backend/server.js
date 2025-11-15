import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobsRoute from "./src/routes/jobs.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", jobsRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Zaylore Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
