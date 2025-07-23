import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Work Schedule API')
    .setDescription('API para gerenciamento de agendas de trabalho')
    .setVersion('1.0')
    .addTag('work-schedule', 'Operações relacionadas às agendas de trabalho')
    .addTag('work-schedule-day', 'Operações relacionadas aos dias da agenda')
    .addTag('forecast', 'Operações relacionadas às previsões mensais')
    .addTag('user', 'Operações relacionadas aos usuários')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Gera o arquivo swagger.json na raiz do projeto
  writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();