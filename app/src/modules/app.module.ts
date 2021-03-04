import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from 'src/modules/pets/controllers/pets.controller';
import { HttpExceptionFilter } from 'src/utils/exceptions/exceptions.filter';
import { logger } from '../utils/middlewares/logger';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env.development.local',
    }),
    PetsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_PET_PATH'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //connectionName: 'pets',
      }),
      inject: [ConfigService],
    }),
    /*MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_ADMIN_PATH'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionName: 'admins',
      }),
      inject: [ConfigService],
    }),*/
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(PetsController);
  }
}
