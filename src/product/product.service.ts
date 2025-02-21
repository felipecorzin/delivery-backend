import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";


@Injectable()
export class ProductService {

    
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    // Get all products
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    
    // Get a single Product
    async getProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id); 
        return product;
    }

    // Post a single product
    async createProduct(payload: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(payload);
        return newProduct.save();
    }

    // Delete Product
    async deleteProduct(id: string): Promise<any> {
        const deletedProduct = await this.productModel.findByIdAndDelete(id);
        return deletedProduct;
    }

    // Put a single product
    async updateProduct(id: string, payload: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel
                            .findByIdAndUpdate(id, payload, {new: true});
        return updatedProduct;
    }
}
