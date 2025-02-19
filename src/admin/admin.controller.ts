/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Controller,
    Get,
    UseGuards,
    Session,
    Post,
    Query,
    Body,
    ValidationPipe,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import  { Express } from 'express';
  
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { Product } from '../products/models/product.model';
import { AddProductImageDto } from './dto/add-image.dto';

import { ImageDto } from './dto/image.dto';
import { Images } from './utils/images';

@Controller('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AdminController {

    constructor(private adminService: AdminService) {}

    /*
    @Get('/images')
    getImages(@Session() session): Promise<Images> {
      return this.adminService.getImages(session.images);
    }
    */
    @Post('/images/add')
    async addImage(
        @Session() session,
        @Body() imageDto: ImageDto,
        @Query(ValidationPipe) addImageDto: AddProductImageDto,
    ): Promise<Images | Product> {
        const result = await this.adminService.addImage(
        session.images,
        imageDto,
        addImageDto,
    );
    if (!(result as Product).titleUrl) {
      session.images = result;
    }

      return result;
    }

    @Post('/images/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(
        @Session() session,
        @UploadedFile() file: Express.Multer.File,
        @Query(ValidationPipe) addImageDto: AddProductImageDto,
    ): Promise<Images | Product> {
        const result = await this.adminService.uploadImage(
        session.images,
        file,
        addImageDto,
    );
    if (!(result as Product).titleUrl) {
      session.images = result;
    }

      return result;
    }
 
    @Post('/images/remove')
    async removeImage(
        @Session() session,
        @Body() imageDto: ImageDto,
        @Query(ValidationPipe) addImageDto: AddProductImageDto,
    ): Promise<Images | Product> {
        const result = await this.adminService.removeImage(
        session.images,
        imageDto,
        addImageDto,
    );
    if (!(result as Product).titleUrl) {
      session.images = result;
    }

      return result;
    }
}
