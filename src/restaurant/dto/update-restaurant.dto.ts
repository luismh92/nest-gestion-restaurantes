import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRestaurantDto {
  @ApiProperty({
    example: 'El Buen Sabor',
    description: 'Nombre del restaurante',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    example: 'Carrera 45 #123-45, Medellín',
    description: 'Dirección del restaurante',
  })
  @IsString()
  direccion: string;

  @ApiProperty({
    example: 'https://elbuen-sabor.com',
    description: 'Sitio web oficial del restaurante',
  })
  @IsString()
  web_site: string;

  @ApiProperty({
    example: 3,
    description: 'ID del tipo de cocina asociado (ej. 3 = Italiana)',
  })
  @IsNumber()
  tipoCocinaId: number;
}
