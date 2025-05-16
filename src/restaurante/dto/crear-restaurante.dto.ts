import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearRestauranteDto {
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
    example: 1,
    description: 'Id del tipo de cocina del restaurante',
  })
  @IsNumber()
  tipoCocinaId: number;
}
