import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetCartChangeDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  lang?: string;
}
