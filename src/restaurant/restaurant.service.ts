import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restauranteRepository: Repository<RestaurantEntity>,
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

  create(restaurante: CreateRestaurantDto) {
    const entity = this.restauranteRepository.create(restaurante);
    return this.restauranteRepository.save(entity);
  }

  update(id: number, restaurante: UpdateRestaurantDto) {
    return this.restauranteRepository.update(id, restaurante);
  }

  delete(id: number) {
    return this.restauranteRepository.delete(id);
  }
}
