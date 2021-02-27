import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/modules/pets/schemas/pet.schema';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
    controllers: [PetsController],
    providers: [PetsService],
    exports: [MongooseModule],
})
export class PetsModule {
    constructor(private petsService: PetsService) { }
}
