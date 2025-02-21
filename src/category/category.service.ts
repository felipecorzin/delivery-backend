import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/category.dto';


@Injectable()
export class CategoryService {

    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {}

    // Get all categories
    async getCategories(): Promise<Category[]> {
        const categories = await this.categoryModel.find();
        return categories;
    }
    
    // Get a single categori
    async getCategory(id: string): Promise<Category> {
        const category = await this.categoryModel.findById(id); 
        return category;
    }

    // Post a single categori
    async createCategory(payload: CreateCategoryDTO): Promise<Category> {
        const newCategory = new this.categoryModel(payload);
        return newCategory.save();
    }

    // Delete categori
    async deleteCategory(id: string): Promise<any> {
        const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
        return deletedCategory;
    }

    // Put a single categori
    async updateCategory(id: string, payload: CreateCategoryDTO): Promise<Category> {
        const updatedProduct = await this.categoryModel
                            .findByIdAndUpdate(id, payload, {new: true});
        return updatedProduct;
    }
}
