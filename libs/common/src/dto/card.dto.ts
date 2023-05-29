import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CardDto {
  @IsString()
  @IsNotEmpty()
  cvc: string;

  @IsNotEmpty()
  @IsNumber()
  exp_month: number;

  @IsNotEmpty()
  @IsNumber()
  exp_year: number;

  @IsCreditCard()
  number: string;
}