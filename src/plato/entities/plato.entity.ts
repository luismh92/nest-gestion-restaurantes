import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

import { CategoriaEntity } from 'src/plato/entities/categoria.etity';
import { RestauranteEntity } from 'src/restaurante/entities/restaurante.entity';

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

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.platos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoriaId' })
  categoria: CategoriaEntity;

  @Column()
  categoriaId: number;

  @ManyToMany(() => RestauranteEntity, (restaurante) => restaurante.platos)
  @JoinTable({
    name: 'plato_restaurante',
    joinColumn: { name: 'platoId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'restauranteId', referencedColumnName: 'id' },
  })
  restaurantes: RestauranteEntity[];
}
