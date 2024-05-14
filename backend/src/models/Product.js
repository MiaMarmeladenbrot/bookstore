import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: [
        "Belletristik",
        "Kinder- und Jugendliteratur",
        "Reiseliteratur",
        "Ratgeber",
      ],
    },
    description: { type: String, required: true, trim: true },
    variations: {
      type: String,
      enum: ["Hardcover", "Paperback", "Taschenbuch", "E-Book"],
    },
    price: { type: Number, required: true, trim: true },
    stock: { type: Number, required: true, trim: true },
    image: { type: String, default: "placeholder.jpg" },
  },
  { collection: "products", timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
