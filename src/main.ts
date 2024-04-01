import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    skipMissingProperties: false,
  }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  return port;
}

bootstrap().then(port => console.log(`Server running in port ${port}`));
