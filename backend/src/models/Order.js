import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    products: { type: mongoose.Types.ObjectId, ref: "Product", required: true },
    state: { type: Boolean, required: true },
    price: { type: Number, required: true },
    customer: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { collection: "orders", timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
