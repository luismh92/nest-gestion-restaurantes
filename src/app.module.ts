import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PlatoModule } from './plato/plato.module';
import { TipoCocinaModule } from './tipo-cocina/tipo-cocina.module';
import { CategoriaEntity } from './plato/entities/categoria.entity';
import { PlatoEntity } from './plato/entities/plato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEntity } from './restaurante/entities/restaurante.entity';
import { TipoCocinaEntity } from './restaurante/entities/tipo-cocina.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'gestion-restaurantes',
      entities: [
        CategoriaEntity,
        PlatoEntity,
        TipoCocinaEntity,
        RestauranteEntity,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    TipoCocinaModule,
    PlatoModule,
    RestauranteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
