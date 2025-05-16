import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishEntity } from './entities/dish.entity';

import { forwardRef } from '@nestjs/common';
import { RestauranteModule } from 'src/restaurant/restaurant.module';
import { RestaurantEntity } from 'src/restaurant/entities/restaurant.entity';
import { DishController } from './dish.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DishEntity, RestaurantEntity]),
    forwardRef(() => RestauranteModule),
  ],
  providers: [DishService],
  controllers: [DishController],
})
export class PlatoModule {}
