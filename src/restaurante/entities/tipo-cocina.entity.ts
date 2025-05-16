import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RestauranteEntity } from './restaurante.entity';

@Entity()
export class TipoCocinaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => RestauranteEntity, (restaurante) => restaurante.tipoCocina)
  restaurantes: RestauranteEntity[];
}
