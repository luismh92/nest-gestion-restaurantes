import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PlatoModule } from './plato/plato.module';
import { TipoCocinaModule } from './tipo-cocina/tipo-cocina.module';

@Module({
  imports: [RestauranteModule, PlatoModule, TipoCocinaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
