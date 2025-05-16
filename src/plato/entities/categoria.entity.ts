import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PlatoEntity } from './plato.entity';

@Entity()
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => PlatoEntity, (plato) => plato.categoria)
  platos: PlatoEntity[];
}
