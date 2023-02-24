import { DynamicModule, Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { NODE_ENV } from 'src/shared/constants/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

declare const module: any;

export class AppModule {
  public static initialize(): DynamicModule {
    /* При инициализации модуля попробуем извлечь инстанс RenderModule
        из персистентных данных между перезагрузками модуля */
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
        viewsDir: null,
      });

    if (module.hot) {
      /* При завершении работы старого модуля
          будем кэшировать инстанс RenderModule */
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule;
      });
    }

    return {
      module: AppModule,
      imports: [
        renderModule,
        ConfigModule.forRoot({
          envFilePath: 'src/server/.env',
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          models: [],
          autoLoadModels: true,
        }),
        UsersModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}

