import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestauranteService } from './restaurant.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@ApiTags('Restaurantes')
@Controller('restaurants')
export class RestauranteController {
  constructor(private readonly restaurantService: RestauranteService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo restaurante',
    description:
      'Registra un nuevo restaurante en el sistema con su nombre, ubicación y demás datos relevantes.',
  })
  @ApiResponse({
    status: 201,
    description: 'El restaurante ha sido creado exitosamente.',
  })
  create(@Body() createRestauranteDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestauranteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos los restaurantes',
    description:
      'Recupera una lista de todos los restaurantes registrados, incluyendo su información básica.',
  })
  @ApiResponse({
    status: 200,
    description: 'Listado completo de restaurantes.',
  })
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un restaurante por ID',
    description:
      'Busca y devuelve los detalles de un restaurante específico mediante su identificador único.',
  })
  @ApiResponse({
    status: 200,
    description: 'Restaurante encontrado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurante no encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Actualizar un restaurante',
    description:
      'Modifica la información de un restaurante existente, identificado por su ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'El restaurante ha sido actualizado correctamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurante no encontrado.',
  })
  update(
    @Param('id') id: string,
    @Body() updateRestauranteDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.update(+id, updateRestauranteDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un restaurante',
    description:
      'Elimina un restaurante del sistema según su identificador único.',
  })
  @ApiResponse({
    status: 200,
    description: 'El restaurante ha sido eliminado correctamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurante no encontrado.',
  })
  remove(@Param('id') id: string) {
    return this.restaurantService.delete(+id);
  }
}
