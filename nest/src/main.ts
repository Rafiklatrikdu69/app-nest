/* eslint-disable */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.use(session({ 
    secret: 'nest cest trop bien !!!!!!!!', 
    resave: false,
    saveUninitialized: false,
  }));


  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(3000);
}
bootstrap();
