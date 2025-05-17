import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoCocinaRestaurant } from '../entities/restaurant.entity';

export class CreateRestaurantDto {
  @ApiProperty({
    example: 'Restaurante la 10',
    description: 'Nombre del restaurante',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    example: 'calle 10 # 20-30',
    description: 'Dirección del restaurante',
  })
  @IsString()
  direccion: string;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Sitio web del restaurante',
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
