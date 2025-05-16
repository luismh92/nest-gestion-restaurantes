import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatoEntity } from './entities/plato.entity';

import { forwardRef } from '@nestjs/common';
import { RestauranteModule } from 'src/restaurante/restaurante.module';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';
import { PlatoController } from './plato.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlatoEntity, RestauranteEntity]),
    forwardRef(() => RestauranteModule),
  ],
  providers: [PlatoService],
  controllers: [PlatoController],
})
export class PlatoModule {}
