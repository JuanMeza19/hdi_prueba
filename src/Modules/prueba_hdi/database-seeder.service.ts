import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Estado } from './entity/estado-entity';

@Injectable()
export class DatabaseSeederService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    await this.insertEstados();
    await this.createStoredProcedure();
  }

  private async insertEstados() {
    const estados = [
      { nombre: 'Aguascalientes', abreviatura: 'AGS' },
      { nombre: 'Baja California', abreviatura: 'BC' },
      { nombre: 'Baja California Sur', abreviatura: 'BCS' },
      { nombre: 'Campeche', abreviatura: 'CAMP' },
      { nombre: 'Chiapas', abreviatura: 'CHIS' },
      { nombre: 'Chihuahua', abreviatura: 'CHIH' },
      { nombre: 'Coahuila', abreviatura: 'COAH' },
      { nombre: 'Colima', abreviatura: 'COL' },
      { nombre: 'Durango', abreviatura: 'DGO' },
      { nombre: 'Guanajuato', abreviatura: 'GTO' },
      { nombre: 'Guerrero', abreviatura: 'GRO' },
      { nombre: 'Hidalgo', abreviatura: 'HGO' },
      { nombre: 'Jalisco', abreviatura: 'JAL' },
      { nombre: 'México', abreviatura: 'MEX' },
      { nombre: 'Michoacán', abreviatura: 'MICH' },
      { nombre: 'Morelos', abreviatura: 'MOR' },
      { nombre: 'Nayarit', abreviatura: 'NAY' },
      { nombre: 'Nuevo León', abreviatura: 'NL' },
      { nombre: 'Oaxaca', abreviatura: 'OAX' },
      { nombre: 'Puebla', abreviatura: 'PUE' },
      { nombre: 'Querétaro', abreviatura: 'QRO' },
      { nombre: 'Quintana Roo', abreviatura: 'QROO' },
      { nombre: 'San Luis Potosí', abreviatura: 'SLP' },
      { nombre: 'Sinaloa', abreviatura: 'SIN' },
      { nombre: 'Sonora', abreviatura: 'SON' },
      { nombre: 'Tabasco', abreviatura: 'TAB' },
      { nombre: 'Tamaulipas', abreviatura: 'TAMPS' },
      { nombre: 'Tlaxcala', abreviatura: 'TLAX' },
      { nombre: 'Veracruz', abreviatura: 'VER' },
      { nombre: 'Yucatán', abreviatura: 'YUC' },
      { nombre: 'Zacatecas', abreviatura: 'ZAC' },
    ];

    for (const estado of estados) {
      const existe = await this.dataSource
        .createQueryBuilder()
        .select('estado.id') // Asegura que el alias sea el mismo
        .from(Estado, 'estado') // Aquí el alias correcto es "estado"
        .where('estado.nombre = :nombre', { nombre: estado.nombre }) // Usa el alias correcto en where
        .getOne();

      if (!existe) {
        await this.dataSource
          .createQueryBuilder()
          .insert()
          .into(Estado)
          .values(estado)
          .execute();

        console.log(`Estado insertado: ${estado.nombre}`);
      }
    }

    console.log('Proceso de inserción de estados finalizado.');
  }

  private async createStoredProcedure() {
    try {
      // Elimina el procedimiento si ya existe (MySQL no admite IF NOT EXISTS en CREATE PROCEDURE)
      await this.dataSource.query(`
            DROP PROCEDURE IF EXISTS ObtenerTodosLosEstados;
        `);

      // Crea el nuevo procedimiento
      await this.dataSource.query(`
            CREATE PROCEDURE ObtenerTodosLosEstados()
            BEGIN
                SELECT * FROM tb_estados;
            END;
        `);

      console.log(
        'Stored Procedure "ObtenerTodosLosEstados" creado correctamente.',
      );
    } catch (error) {
      console.error('Error al crear el Stored Procedure:', error);
    }
  }
}
