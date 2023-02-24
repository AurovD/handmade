import { NestFactory } from '@nestjs/core';
import { PORT } from 'src/shared/constants/env';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule.initialize());
  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
// https://github.com/yakovlev-alexey/nest-next-example
// https://habr.com/ru/amp/post/570886/
