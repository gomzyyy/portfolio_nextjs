import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/mongoDb.js";
dotenv.config({});
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT ?? 6600;
const corsOptions = {
  origin: "*",
  credentials: true,
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// routes
app.use("/", routes);

// server
app.listen(PORT,"0.0.0.0", () => {
  console.log(`server working at http://localhost:${PORT}/`);
  console.log(`get blogs at http://localhost:${PORT}/get/blogs`);
  connectDB();
});
