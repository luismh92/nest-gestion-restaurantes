import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.dishRepository.find();
  }

  findOne(id: number) {
    return this.dishRepository.findOne({
      where: { id },
    });
  }

  create(plato: CreateDishDto) {
    const entity = this.dishRepository.create(plato);
    return this.dishRepository.save(entity);
  }

  update(id: number, platoDto: UpdateDishDto) {
    return this.dishRepository.update(id, platoDto);
  }

  delete(id: number) {
    return this.dishRepository.delete(id);
  }
}
