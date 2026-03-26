import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name!: string;

  @IsString()
  alias?: string;

  @IsNotEmpty()
  phone!: string;

  @IsNumber()
  @IsNotEmpty()
  user_id!: number;
}
