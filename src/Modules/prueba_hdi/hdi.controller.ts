import { Controller, Get } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HdiService } from './hdi.service';

@ApiTags('Hdi')
@Controller('hdi')
export class HdiController {
  constructor(private readonly hdiService: HdiService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estados' })
  @ApiResponse({
    status: 200,
    description: 'Lista de estados obtenida con éxito.',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  async obtenerEstados() {
    return await this.hdiService.obtenerEstados();
  }
}
