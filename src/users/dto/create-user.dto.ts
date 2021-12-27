import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNumber, MaxLength, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlpha()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Min(18)
  age?: number;
}
