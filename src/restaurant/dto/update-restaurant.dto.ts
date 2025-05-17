import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoCocinaRestaurant } from '../entities/restaurant.entity';

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
    example: TipoCocinaRestaurant.ITALIANA,
    description:
      'Tipo de cocina del restaurante (Italiana, Japonesa, Mexicana, Colombiana, India, Internacional)',
    enum: TipoCocinaRestaurant,
  })
  @IsEnum(TipoCocinaRestaurant)
  @IsNotEmpty()
  tipo_cocina: TipoCocinaRestaurant;
}
