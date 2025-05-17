import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    const restaurants = await this.restauranteRepository.find({
      relations: ['platos'],
    });

    if (!restaurants) {
      throw new NotFoundException('No se encontraron restaurantes');
    }

    return restaurants;
  }

  async findOne(id: number) {
    const restaurant = await this.restauranteRepository.findOne({
      where: { id },
      relations: ['platos'],
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurante no encontrado');
    }
    return restaurant;
  }

  create(restaurante: CreateRestaurantDto) {
    const entity = this.restauranteRepository.create(restaurante);
    return this.restauranteRepository.save(entity);
  }

  async update(id: number, restauranteDto: UpdateRestaurantDto) {
    const restaurant = await this.restauranteRepository.findOneBy({ id });

    if (!restaurant) {
      throw new NotFoundException('Restaurante no encontrado');
    }

    return this.restauranteRepository.update(id, restauranteDto);
  }

  async delete(id: number) {
    const restaurant = await this.restauranteRepository.findOneBy({ id });

    if (!restaurant) {
      throw new NotFoundException('Restaurante no encontrado');
    }
    return this.restauranteRepository.delete(id);
  }
}
