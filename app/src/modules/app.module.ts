import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from 'src/controllers/petsController';
import { HttpExceptionFilter } from 'src/exceptions/exceptionsFilter';
import { logger } from '../middlewares/logger';
import { PetsModule } from '../modules/petsModule';

@Module({
  imports: [
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
