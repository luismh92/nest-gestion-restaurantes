import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { DishEntity } from 'src/dish/entities/dish.entity';

export enum TipoCocinaRestaurant {
  ITALIANA = 'Italiana',
  JAPONESA = 'Japonesa',
  MEXICANA = 'Mexicana',
  COLOMBIANA = 'Colombiana',
  INDIA = 'India',
  INTERNACIONAL = 'Internacional',
}

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

  @Column({
    type: 'enum',
    enum: TipoCocinaRestaurant,
    nullable: false,
  })
  tipo_cocina: TipoCocinaRestaurant;

  @ManyToMany(() => DishEntity, (plato) => plato.restaurantes)
  platos: DishEntity[];
}
