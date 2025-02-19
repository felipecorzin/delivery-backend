import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  titleUrl: string;

  [lang: string]: any | { title: string; contentHTML: string };
}
