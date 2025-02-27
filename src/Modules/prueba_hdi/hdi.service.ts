import { Injectable } from '@nestjs/common';

import { DataSource } from 'typeorm';

@Injectable()
export class HdiService {
  constructor(private dataSource: DataSource) {}
  async obtenerEstados(): Promise<any[]> {
    try {
      const estados = await this.dataSource.query(
        `CALL ObtenerTodosLosEstados();`,
      );
      return estados[0]; // MySQL devuelve los resultados en un array dentro de otro array
    } catch (error) {
      console.error('Error al obtener los estados:', error);
      throw new Error('No se pudieron obtener los estados.');
    }
  }
}
