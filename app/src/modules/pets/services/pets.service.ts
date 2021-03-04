import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isNullOrUndefined } from 'util';
import PetDto from '../../../contracts/pet.dto';
import { Pet } from '../interfaces/pet.interface';

@Injectable()
export class PetsService {
  constructor(@InjectModel('Pet') private petModel: Model<Pet>) { }

  async addPet(petDto: PetDto): Promise<Pet> {
    const addedPet = new this.petModel(petDto);
    return addedPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find();
  }

  async findPets(petDto: PetDto): Promise<Pet[]> {
    /*const dict = {
      kind: petDto.kind,
      breed: petDto.breed,
      name: petDto.name,
      age: petDto.age
    };
    Object.keys(dict).forEach(
      (key) => dict[key] === undefined && delete dict[key]
    );*/
    console.log(petDto);
    Object.keys(petDto).forEach(
      (key) => petDto[key] === undefined && delete petDto[key]
    );
    console.log(petDto);

    return this.petModel.find(petDto).exec();
  }

  async takePet(id: any): Promise<Pet> {
    return this.petModel.findByIdAndRemove(id).exec();
  }
}
