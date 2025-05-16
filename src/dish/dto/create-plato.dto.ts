import { IsString, IsNotEmpty, IsNumber, Min, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoriaDish } from '../entities/dish.entity';

export class CreateDishDto {
  @ApiProperty({
    example: 'Bandeja Paisa',
    description: 'Nombre del plato',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Plato típico colombiano con arroz, carne, huevo y fríjoles.',
    description: 'Descripción del plato',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    example: 35000,
    description: 'Precio del plato en pesos colombianos',
  })
  @IsNumber()
  @Min(0)
  precio: number;

  @ApiProperty({
    example: CategoriaDish.ENTRADA,
    description: 'Categoría del plato (entrada, plato fuerte, postre, bebida)',
    enum: CategoriaDish,
  })
  @IsEnum(CategoriaDish)
  @IsNotEmpty()
  categoria: CategoriaDish;
}
