import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({ path: './.env' })
  const app = await NestFactory.create(AppModule, {cors: {
    origin: process.env.NEXT_BASE_URL || 'http://localhost:3000',
    credentials: true,
  } });
  // app.enableCors({
  //   origin: 'http://localhost:3000', // Reemplaza con el origen de tu frontend
  //   credentials: true, // Permite enviar cookies, al poner esto en true, no puedo poner origin: '*'
  // });
  app.use(cookieParser()); // Middleware para parsear cookies
  app.setGlobalPrefix('api'); // Prefijo global para todas las rutas /api/auth/signin
  await app
    .listen(process.env.PORT ?? 3001)
    .then(() => console.log('Server running on http://localhost:3001/api'));
}
bootstrap();
