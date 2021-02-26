import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/schemas/petSchema';
import { PetsController } from '../controllers/petsController';
import { PetsService } from '../services/petsService';

@Module({
    imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
    controllers: [PetsController],
    providers: [PetsService],
    exports: [MongooseModule],
})
export class PetsModule {
    constructor(private petsService: PetsService) { }
}
