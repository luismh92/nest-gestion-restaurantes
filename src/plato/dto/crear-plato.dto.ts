import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearPlatoDto {
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
    example: 2,
    description:
      'ID de la categoría del plato (ej: entrada, postre, plato fuerte, bebida)',
  })
  @IsNumber()
  @IsNotEmpty()
  categoriaId: number;
}
