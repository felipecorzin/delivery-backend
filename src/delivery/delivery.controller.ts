import {
    Controller,
    Body,
    Session,
    Post,
    Get,
    UseGuards,
    Param,
    Delete,
    Headers,
    Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
  
import { DeliveryService } from './delivery.service';
import { ContactDto } from './dto/contact.dto';
import { PageDto } from './dto/page.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Page } from './models/page.model';
import { Theme } from './models/theme.model';
import { Config } from './models/config.model';

@Controller('delivery')
export class DeliveryController {

    constructor(private deliveryService: DeliveryService) {}

    @Get('/config')
    getConfig(@Session() session): Promise<{ config: string }> {
      return this.deliveryService.getConfig(session);
    }

    @Post('/contact')
    sendContact(
    @Body() contactDto: ContactDto,
    @Session() session,
    @Headers('lang') lang: string,
    ): void {
      this.deliveryService.sendContact(contactDto, session.cart, lang);
    }

    @Get('/page/all')
    getPages(
    @Headers('lang') lang: string,
    @Query('titles') titles: boolean,
    ): Promise<Page[]> {
      return this.deliveryService.getPages(lang, titles);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('/page')
    addOrEditPage(@Body() pageDto: PageDto): Promise<Page> {
      return this.deliveryService.addOrEditPage(pageDto);
    }

    @Get('/page/:titleUrl')
    getPage(
    @Param('titleUrl') titleUrl: string,
    @Headers('lang') lang: string,
    ): Promise<Page> {
      return this.deliveryService.getPage(titleUrl, lang);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete('/page/:titleUrl')
    deletePage(@Param('titleUrl') titleUrl: string): Promise<void> {
      return this.deliveryService.deletePage(titleUrl);
    }

    @Get('/theme/all')
    getThemes(): Promise<Theme[]> {
      return this.deliveryService.getThemes();
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('/theme')
    addOrEditTheme(@Body() themeDto): Promise<Theme> {
      return this.deliveryService.addOrEditTheme(themeDto);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete('/theme/:titleUrl')
    deleteTheme(@Param('titleUrl') titleUrl: string): Promise<void> {
      return this.deliveryService.deleteTheme(titleUrl);
    }

    @Get('/config/all')
    getConfigs(): Promise<Config[]> {
      return this.deliveryService.getConfigs();
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('/config')
    addOrEditConfig(@Body() configDto): Promise<Config> {
      return this.deliveryService.addOrEditConfig(configDto);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete('/config/:titleUrl')
    deleteConfig(@Param('titleUrl') titleUrl: string): Promise<void> {
      return this.deliveryService.deleteConfig(titleUrl);
    }
}

