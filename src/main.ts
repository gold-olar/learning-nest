import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Learning Api')
    .setDescription('Any desc')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
