import { IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  quantity: number

  @IsNotEmpty()
  category: string
}
