import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetDocument } from 'src/pets/schemas/pet.schema';
import { Model } from 'mongoose';
import PetDto from 'src/pets/dto/pet.dto';

@Injectable()
export class PetsService {
    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async addPet(petDto: PetDto): Promise<Pet> {
        const addedPet = new this.petModel(petDto);
        return addedPet.save();
    }

    async findPets(petDto: PetDto): Promise<Pet[]> {
        return this.petModel
            .find({
                kind: petDto.kind,
                breed: petDto.breed,
                name: petDto.name,
                age: petDto.age,
            })
            .exec();
    }

    async takePet(id: any): Promise<Pet> {
        return this.petModel.findByIdAndRemove(id).exec();
    }
}
