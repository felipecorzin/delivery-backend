import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { TranslationsController } from './translations.controller';
import TranslationScheme from './schemas/translation.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Translation', schema: TranslationScheme },
    ]),
    AuthModule,
    HttpModule
  ],
  controllers: [TranslationsController],
  providers: [],
  exports: [MongooseModule],
})
export class TranslationsModule {}
