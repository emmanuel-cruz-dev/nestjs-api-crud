import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsPositive,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
