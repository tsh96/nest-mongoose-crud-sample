import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { codegen } from 'swagger-axios-codegen/dist';
import { AppModule } from './app.module';
import { camelCase } from 'lodash'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  Object.keys(document.paths).forEach(path => {
    Object.keys(document.paths[path]).forEach(method => {
      const operation = document.paths[path][method];
      if (operation?.operationId) {
        operation.operationId = camelCase(operation.operationId.replace(/.*Controller_/, ''))
      }
    })
  })
  codegen({
    source: document,
    useHeaderParameters: false
  })

  await app.listen(3000);
}
bootstrap();
