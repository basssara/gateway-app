import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.set('env', appConfig.env);
  app.set('etag', 'strong');
  app.set('trust proxy', true);
  app.set('x-powered-by', false);

  await app.listen(appConfig.port, appConfig.host);
}
bootstrap();
