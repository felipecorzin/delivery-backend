import { Document } from "mongoose";

export interface Category extends Document {
    readonly name: string;
    readonly count: number;
    readonly createdAt: Date;
}