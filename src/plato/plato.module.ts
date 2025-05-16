import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatoEntity } from './entities/plato.entity';

import { forwardRef } from '@nestjs/common';
import { RestauranteModule } from 'src/restaurant/restaurant.module';
import { RestaurantEntity } from 'src/restaurant/entities/restaurant.entity';
import { PlatoController } from './plato.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlatoEntity, RestaurantEntity]),
    forwardRef(() => RestauranteModule),
  ],
  providers: [PlatoService],
  controllers: [PlatoController],
})
export class PlatoModule {}
