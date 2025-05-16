import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './entities/categoria.entity';
import { PlatoEntity } from './entities/plato.entity';

import { forwardRef } from '@nestjs/common';
import { RestauranteModule } from 'src/restaurante/restaurante.module';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlatoEntity, CategoriaEntity, RestauranteEntity]),
    forwardRef(() => RestauranteModule),
  ],
  providers: [PlatoService],
})
export class PlatoModule {}
