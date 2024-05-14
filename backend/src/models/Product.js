import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["Hosen", "Schuhe", "Pullover", "T-shirts"],
    },
    description: { type: String, required: true, trim: true },
    variations: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    stock: { type: Number, required: true, trim: true },
    image: { type: String, default: "placeholder.jpg" },
  },
  { collection: "products", timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
