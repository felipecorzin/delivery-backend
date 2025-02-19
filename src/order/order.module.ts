import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import OrderSchema from './schemas/order.schema';
import TranslationScheme from '../translations/schemas/translation.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'Order', schema: OrderSchema },
      { name: 'Translation', schema: TranslationScheme },
    ]),
    AuthModule,
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
