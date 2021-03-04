import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from 'src/modules/pets/schemas/pet.schema';
import { Pet } from './interfaces/pet.interface';
import { AuthModule } from '../auth/auth.module';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }]),
        AuthModule
    ],
    controllers: [PetsController],
    providers: [PetsService],
    exports: [MongooseModule]
})
export class PetsModule {
    constructor(private petsService: PetsService) { }
}
