/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const globalPrefix = 'api';
  const port = 8080;
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde el frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.setGlobalPrefix(globalPrefix);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Estados')
    .setDescription('Documentación de la API para gestionar estados de México')
    .setVersion('1.0')
    .addTag('Estados')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
  console.log(`🚀 Servidor corriendo en: http://localhost:${port}/api`);
  console.log(`📖 Swagger Docs: http://localhost:${port}/api/docs`);
}
bootstrap();
