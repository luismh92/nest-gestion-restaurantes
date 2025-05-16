import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';

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

  @ManyToMany(() => RestauranteEntity, (restaurante) => restaurante.platos)
  @JoinTable({
    name: 'plato_restaurante',
    joinColumn: { name: 'platoId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'restauranteId', referencedColumnName: 'id' },
  })
  restaurantes: RestauranteEntity[];
}
