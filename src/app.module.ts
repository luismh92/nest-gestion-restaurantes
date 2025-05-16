import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurant/restaurant.module';
import { PlatoModule } from './plato/plato.module';
import { TipoCocinaModule } from './tipo-cocina/tipo-cocina.module';
import { PlatoEntity } from './plato/entities/plato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant/entities/restaurant.entity';
import { TipoCocinaEntity } from './restaurant/entities/tipo-cocina.entity';
import { PlatoController } from './plato/plato.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'gestion-restaurantes',
      entities: [PlatoEntity, TipoCocinaEntity, RestaurantEntity],
      synchronize: true,
      dropSchema: true,
    }),
    TipoCocinaModule,
    PlatoModule,
    RestauranteModule,
  ],
  controllers: [AppController, PlatoController],
  providers: [AppService],
})
export class AppModule {}
