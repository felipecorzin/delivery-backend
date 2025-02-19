import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsModule } from 'src/products/products.module'; 

@Module({
  imports: [ConfigModule.forRoot(), AuthModule,ProductsModule],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
