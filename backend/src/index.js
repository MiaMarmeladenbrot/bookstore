import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

try {
  await connectToDatabase();
  const PORT = 5004;
  app.listen(PORT, () => console.log("Server ready at port", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
