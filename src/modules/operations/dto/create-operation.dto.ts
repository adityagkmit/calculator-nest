import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateOperationDto {
  @IsNotEmpty()
  operand1: number;

  @IsNotEmpty()
  operand2: number;

  @IsNotEmpty()
  operator: string;

  @IsEmail()
  email: string;
}