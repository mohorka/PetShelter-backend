import { Controller, Post, Body, Get, UseFilters } from '@nestjs/common';
import { ForbiddenException } from 'src/exceptions/exceptions';
import { HttpExceptionFilter } from 'src/exceptions/exceptionsFilter';
import PetDto from '../dto/petDto';
import { PetsService } from '../services/petsService';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) { }

  @Get()
  async findPet(@Body() findPet: PetDto): Promise<any> {
    return 'pet gotten';
  }
  @Post()
  async addPet(@Body() addPetDto: PetDto) {
    throw new ForbiddenException();
  }
}
