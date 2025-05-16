import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestauranteEntity } from './entities/restaurante.entity';
import { CrearRestauranteDto } from './dto/crear-restaurante.dto';
import { ActualizarRestauranteDto } from './dto/actualizar-restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(RestauranteEntity)
    private readonly restauranteRepository: Repository<RestauranteEntity>,
  ) {}

  findAll() {
    return this.restauranteRepository.find({ relations: ['platos'] });
  }

  findOne(id: number) {
    return this.restauranteRepository.findOne({
      where: { id },
      relations: ['platos'],
    });
  }

  create(restaurante: CrearRestauranteDto) {
    const entity = this.restauranteRepository.create(restaurante);
    return this.restauranteRepository.save(entity);
  }

  update(id: number, restaurante: ActualizarRestauranteDto) {
    return this.restauranteRepository.update(id, restaurante);
  }

  delete(id: number) {
    return this.restauranteRepository.delete(id);
  }
}
