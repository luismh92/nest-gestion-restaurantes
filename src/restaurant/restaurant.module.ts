import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';

import { forwardRef } from '@nestjs/common';
import { PlatoModule } from 'src/plato/plato.module';
import { TipoCocinaEntity } from './entities/tipo-cocina.entity';
import { PlatoEntity } from 'src/plato/entities/plato.entity';
import { RestauranteController } from './restaurant.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlatoEntity, TipoCocinaEntity, RestaurantEntity]),
    forwardRef(() => PlatoModule),
  ],
  providers: [RestauranteService],
  controllers: [RestauranteController],
})
export class RestauranteModule {}
