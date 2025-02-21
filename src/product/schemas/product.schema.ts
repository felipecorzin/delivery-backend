import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    categories: [String],
    stars: Number,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});