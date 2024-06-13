import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser"; // für middleware auth

import { connectToDatabase } from "./src/models/index.js";
import { usersRouter } from "./src/routes/usersRouter.js";
import { productsRouter } from "./src/routes/productsRouter.js";
import { ordersRouter } from "./src/routes/ordersRouter.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser()); // für middleware auth

app.use(morgan("dev"));
app.use(express.static("uploads"));
// app.use("/uploads", express.static(path.join(__dirname + "/backend/data/images")))
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Server is running ...");
});

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/orders", ordersRouter);

try {
  await connectToDatabase();
  const PORT = 5004;
  app.listen(PORT, () => console.log("Server ready at port", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
