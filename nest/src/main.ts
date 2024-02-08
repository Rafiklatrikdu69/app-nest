/* eslint-disable */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration du middleware de session
  app.use(session({ 
    secret: 'nest is awesome', // Clé secrète pour signer les cookies de session
    resave: false,
    saveUninitialized: false,
  }));

  // Activer CORS avec prise en charge des cookies de session
  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(3000);
}
bootstrap();
