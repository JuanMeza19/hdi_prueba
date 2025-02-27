/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HdiModule } from './Modules/prueba_hdi/hdi.module';
import { Estado } from './Modules/prueba_hdi/entity/estado-entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1', // IP fija del contenedor MySQL
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'hdi12345678',
      password: process.env.DB_PASSWORD || 'hdi12345678',
      database: process.env.DB_NAME || 'HDI',
      entities: [Estado],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    HdiModule,
  ],
})
export class AppModule {}
