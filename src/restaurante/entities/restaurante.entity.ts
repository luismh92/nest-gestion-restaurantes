import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

import { TipoCociaEntity } from 'src/restaurante/entities/tipo-cocina.entity';
import { PlatoEntity } from 'src/plato/entities/plato.entity';

@Entity()
export class RestauranteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  web_site: string;

  @ManyToOne(() => TipoCociaEntity, (tipoCocina) => tipoCocina.restaurantes)
  @JoinColumn({ name: 'tipoCocinaId' })
  tipoCocina: TipoCociaEntity;

  @Column()
  tipoCocinaId: number;

  @ManyToMany(() => PlatoEntity, (plato) => plato.restaurantes)
  platos: PlatoEntity[];
}
