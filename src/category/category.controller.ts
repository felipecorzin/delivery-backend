import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    // Add Category: /category/create
    @Post('/create')
    async createCategory(@Res() res, @Body() payload: CreateCategoryDTO) {
        const category = await this.categoryService.createCategory(payload);
        return res.status(HttpStatus.OK).json({
            message: 'Category Successfully Created',
            category
        });
    }

    // Get Products /product
    // @Get('/list')
    @Get('/getAll')
    async getCategories(@Res() res) {
        const categories = await this.categoryService.getCategories();
        return res.status(HttpStatus.OK).json(categories);
    }

    // GET single product: /product/5c9d46100e2e5c44c444b2d1
    @Get('/:id')
    async getCategory(@Res() res, @Param('id') id) {
        const category = await this.categoryService.getCategory(id);
        if (!category) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    // Delete Product: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteCategory(@Res() res, @Query('id') id) {
        const categoryDeleted = await this.categoryService. deleteCategory(id);
        if (!categoryDeleted) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Category Deleted Successfully',
            categoryDeleted
        });
    }

    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateCategory(@Res() res, @Body()  payload: CreateCategoryDTO, @Query('id') id) {
        const updatedCategory = await this.categoryService.updateCategory(id, payload);
        if (!updatedCategory) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Category Updated Successfully',
            updatedCategory 
        });
    }
}
