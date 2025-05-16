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
import { PlatoService } from './plato.service';
import { ActualizarPlatoDto } from './dto/actualizar-plato.dto';
import { CrearPlatoDto } from './dto/crear-plato.dto';

@ApiTags('Platos')
@Controller('plato')
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

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
  create(@Body() createPlatoDto: CrearPlatoDto) {
    return this.platoService.create(createPlatoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos los platos',
    description:
      'Obtiene una lista de todos los platos registrados en el sistema, incluyendo su información básica y relaciones.',
  })
  @ApiResponse({ status: 200, description: 'Listado completo de platos.' })
  findAll() {
    return this.platoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un plato por ID',
    description:
      'Busca y devuelve un plato específico mediante su identificador único.',
  })
  @ApiResponse({ status: 200, description: 'Plato encontrado con éxito.' })
  findOne(@Param('id') id: string) {
    return this.platoService.findOne(+id);
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
  update(@Param('id') id: string, @Body() updatePlatoDto: ActualizarPlatoDto) {
    return this.platoService.update(+id, updatePlatoDto);
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
    return this.platoService.delete(+id);
  }
}
