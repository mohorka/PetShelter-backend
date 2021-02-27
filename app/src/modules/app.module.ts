import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from 'src/pets/controllers/pets.controller';
import { HttpExceptionFilter } from 'src/utils/exceptions/exceptions.filter';
import { logger } from '../utils/middlewares/logger';
import { PetsModule } from './pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    PetsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/petShelter', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
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
