import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AdminModule,
    AuthModule,
    CartModule,
    DeliveryModule,
    OrderModule,
    ProductsModule,
    TranslationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
