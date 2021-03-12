import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { AdminsModule } from "../admins/admins.module";
import { PetsModule } from "../pets/pets.module";
import SeedService from "./services/seed.service"

@Module({
    imports: []
        
})
export class SeedModule {
    constructor(private seedService: SeedService) {}
}