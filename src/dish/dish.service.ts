import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishEntity } from './entities/dish.entity';
import { CreateDishDto } from './dto/create-plato.dto';
import { UpdateDishDto } from './dto/update-plato.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishEntity)
    private readonly dishRepository: Repository<DishEntity>,
  ) {}

  async findAll() {
    const dishes = await this.dishRepository.find();
    if (!dishes) {
      throw new NotFoundException('No se encontraron platos');
    }

    return dishes;
  }

  async findOne(id: number) {
    const dish = await this.dishRepository.findOneBy({ id });

    if (!dish) {
      throw new NotFoundException('Plato no encontrado');
    }
    return dish;
  }

  create(plato: CreateDishDto) {
    const entity = this.dishRepository.create(plato);

    return this.dishRepository.save(entity);
  }

  async update(id: number, platoDto: UpdateDishDto) {
    const dish = await this.dishRepository.findOneBy({ id });

    if (!dish) {
      throw new NotFoundException('Plato no encontrado');
    }

    return this.dishRepository.update(id, platoDto);
  }

  async delete(id: number) {
    const dish = await this.dishRepository.findOneBy({ id });

    if (!dish) {
      throw new NotFoundException('Plato no encontrado');
    }
    return this.dishRepository.delete(id);
  }
}
