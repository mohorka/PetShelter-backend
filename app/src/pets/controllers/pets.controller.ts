import { Controller, Post, Body, Get, UseFilters } from '@nestjs/common';
import {
  ForbiddenException,
  NotFoundException,
} from 'src/utils/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/utils/exceptions/exceptions.filter';
import PetDto from '../dto/pet.dto';
import { PetsService } from '../services/pets.service';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) { }

  @Get()
  async findPets(@Body() findPet: PetDto): Promise<any> {
    const pets = await this.petsService.findPets(findPet);
    if (pets.length == 0) throw new NotFoundException();
    return pets;
  }
  @Post()
  async addPet(@Body() addPetDto: PetDto) {
    throw new ForbiddenException();
  }
}
