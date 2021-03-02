import {
  Request,
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { NotFoundException } from 'src/utils/exceptions/exceptions';
import PetDto from '../contracts/pet.dto';
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
  @UseGuards(JwtAuthGuard)
  @Post()
  async addPet(@Request() req, @Body() addPetDto: PetDto) {
    await this.petsService.addPet(addPetDto);
    return req.user;
  }
}
