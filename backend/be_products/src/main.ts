import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import * as nocache from 'nocache';
import { HttpExceptionFilter } from './http-exeption.filter';


dotenv.config({ path: '../*.env' });

function checkEnvironment(configService: ConfigService) {
  const requiredEnvVars = [
    'PORT',
    'ISSUER_BASE_URL',
    'AUDIENCE',
    'CLIENT_ORIGIN_URL',
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!configService.get<string>(envVar)) {
      throw Error(`Undefined environment variable: ${envVar}`);
    }
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  checkEnvironment(configService);

  app.setGlobalPrefix('api');

  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(nocache());
  
  const config = new DocumentBuilder()
    .setTitle('Products')
    .setDescription('Products Apis')
    .setVersion('1.0')
    .addTag('products')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/document', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
