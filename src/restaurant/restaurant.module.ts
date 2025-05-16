import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';

import { forwardRef } from '@nestjs/common';
import { PlatoModule } from 'src/dish/dish.module';
import { TipoCocinaEntity } from './entities/tipo-cocina.entity';
import { DishEntity } from 'src/dish/entities/dish.entity';
import { RestauranteController } from './restaurant.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DishEntity, TipoCocinaEntity, RestaurantEntity]),
    forwardRef(() => PlatoModule),
  ],
  providers: [RestauranteService],
  controllers: [RestauranteController],
})
export class RestauranteModule {}
