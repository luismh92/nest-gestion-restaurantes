import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestauranteService } from './restaurant.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestauranteController {
  constructor(private readonly restaurantService: RestauranteService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo plato',
    description:
      'Registra un nuevo plato en el sistema con su nombre, descripción, precio, categoría y los restaurantes asociados.',
  })
  @ApiResponse({
    status: 201,
    description: 'El plato ha sido creado exitosamente.',
  })
  create(@Body() createPlatoDto: CreateRestaurantDto) {
    return this.restaurantService.create(createPlatoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos los platos',
    description:
      'Obtiene una lista de todos los platos registrados en el sistema, incluyendo su información básica y relaciones.',
  })
  @ApiResponse({ status: 200, description: 'Listado completo de platos.' })
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un plato por ID',
    description:
      'Busca y devuelve un plato específico mediante su identificador único.',
  })
  @ApiResponse({ status: 200, description: 'Plato encontrado con éxito.' })
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un plato',
    description:
      'Modifica los datos de un plato existente, identificado por su ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'El plato ha sido actualizado correctamente.',
  })
  update(@Param('id') id: string, @Body() updatePlatoDto: UpdateRestaurantDto) {
    return this.restaurantService.update(+id, updatePlatoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un plato',
    description: 'Elimina un plato del sistema según su identificador único.',
  })
  @ApiResponse({
    status: 200,
    description: 'El plato ha sido eliminado correctamente.',
  })
  remove(@Param('id') id: string) {
    return this.restaurantService.delete(+id);
  }
}
