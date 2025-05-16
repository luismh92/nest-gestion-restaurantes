import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurant/restaurant.module';
import { DishModule } from './dish/dish.module';
import { TipoCocinaModule } from './tipo-cocina/tipo-cocina.module';
import { DishEntity } from './dish/entities/dish.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant/entities/restaurant.entity';
import { TipoCocinaEntity } from './restaurant/entities/tipo-cocina.entity';
import { DishController } from './dish/dish.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '29062013',
      database: 'gestion-restaurantes',
      entities: [DishEntity, TipoCocinaEntity, RestaurantEntity],
      synchronize: true,
      dropSchema: true,
    }),
    TipoCocinaModule,
    DishModule,
    RestauranteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
