// import mongoose, { connection } from "mongoose"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import connectdb from "./config/db.js";

import detailRouter from "./Routes/detailsRoutes.js";

const app = express();
connectdb();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
};

app.use(cors(corsOptions));
const port = process.env.PORT;


app.use("/api/form", detailRouter);

app.listen(port, () => {
  console.log(`Server port is ${port}`);
});
