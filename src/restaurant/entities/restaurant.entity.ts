import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

import { TipoCocinaEntity } from './tipo-cocina.entity';
import { PlatoEntity } from 'src/plato/entities/plato.entity';

@Entity()
export class RestaurantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  web_site: string;

  @ManyToOne(() => TipoCocinaEntity, (tipoCocina) => tipoCocina.restaurantes)
  @JoinColumn({ name: 'tipoCocinaId' })
  tipoCocina: TipoCocinaEntity;

  @Column()
  tipoCocinaId: number;

  @ManyToMany(() => PlatoEntity, (plato) => plato.restaurantes)
  platos: PlatoEntity[];
}
