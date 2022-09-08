import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./db/index.js";
import UserRouter from "./routes/users.js";
dotenv.config();
connect();
const app = express();
app.use(express.json());
app.use(cors({ origin:process.env.CORS_ORIGIN}))
app.use("/users", UserRouter);
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});


