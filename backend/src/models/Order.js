import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    products: [
      { type: mongoose.Types.ObjectId, ref: "Product", required: true },
    ],
    state: { type: Boolean, default: false },
    price: { type: Number, required: true },
    customer: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { collection: "orders", timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
