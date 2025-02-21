import { Controller, Post, Res, HttpStatus, Body, Get, Param, 
    NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from "./product.service";

import { CreateProductDTO } from "./dto/product.dto";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    // Add Product: /product/create
    @Post('/create')
    async createProduct(@Res() res, @Body() payload: CreateProductDTO) {
        const product = await this.productService.createProduct(payload);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product
        });
    }

    // Get Products /product
    // @Get('/list')
    @Get('/getAll')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json(products);
    }

    // GET single product: /product/5c9d46100e2e5c44c444b2d1
    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id) {
        const product = await this.productService.getProduct(id);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product);
    }

    // Delete Product: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('id') id) {
        const productDeleted = await this.productService.deleteProduct(id);
        if (!productDeleted) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }

    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateProduct(@Res() res, @Body() payload: CreateProductDTO, @Query('id') id) {
        const updatedProduct = await this.productService.updateProduct(id, payload);
        if (!updatedProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct 
        });
    }
}
