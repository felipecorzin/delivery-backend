import { Schema } from "mongoose";

export const CategorySchema = new Schema({
    name: String,
    count: Number,
    createdAt: { type: Date, default: Date.now }
});