import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RestaurantEntity } from 'src/restaurant/entities/restaurant.entity';

export enum CategoriaPlato {
  ENTRADA = 'entrada',
  PLATO_FUERTE = 'plato fuerte',
  POSTRE = 'postre',
  BEBIDA = 'bebida',
}

@Entity()
export class PlatoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;

  @Column({
    type: 'enum',
    enum: CategoriaPlato,
    nullable: false,
  })
  categoria: CategoriaPlato;

  @ManyToMany(() => RestaurantEntity, (restaurant) => restaurant.platos)
  @JoinTable({
    name: 'plato_restaurante',
    joinColumn: { name: 'platoId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'restauranteId', referencedColumnName: 'id' },
  })
  restaurantes: RestaurantEntity[];
}
