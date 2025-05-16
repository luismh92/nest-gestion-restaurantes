import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RestaurantEntity } from './restaurant.entity';

@Entity()
export class TipoCocinaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => RestaurantEntity, (restaurante) => restaurante.tipoCocina)
  restaurantes: RestaurantEntity[];
}
