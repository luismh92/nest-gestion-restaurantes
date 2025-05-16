import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEntity } from './entities/restaurante.entity';

import { forwardRef } from '@nestjs/common';
import { PlatoModule } from 'src/plato/plato.module';
import { TipoCocinaEntity } from './entities/tipo-cocina.entity';
import { PlatoEntity } from 'src/plato/entities/plato.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlatoEntity,
      TipoCocinaEntity,
      RestauranteEntity,
    ]),
    forwardRef(() => PlatoModule),
  ],
  providers: [RestauranteService],
})
export class RestauranteModule {}
