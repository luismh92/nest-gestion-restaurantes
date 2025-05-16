import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlatoEntity } from './entities/plato.entity';
import { CrearPlatoDto } from './dto/crear-plato.dto';
import { ActualizarPlatoDto } from './dto/actualizar-plato.dto';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(PlatoEntity)
    private readonly platoRepository: Repository<PlatoEntity>,
  ) {}

  findAll() {
    return this.platoRepository.find();
  }

  findOne(id: number) {
    return this.platoRepository.findOne({
      where: { id },
    });
  }

  create(plato: CrearPlatoDto) {
    const entity = this.platoRepository.create(plato);
    return this.platoRepository.save(entity);
  }

  update(id: number, platoDto: ActualizarPlatoDto) {
    return this.platoRepository.update(id, platoDto);
  }

  delete(id: number) {
    return this.platoRepository.delete(id);
  }
}
