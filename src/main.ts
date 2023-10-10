import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

async function buscaDadosAxios()
{
  const response = await axios.get('https://api.adviceslip.com/advice')
  console.log(response.data);
}
buscaDadosAxios();