import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin } from './interfaces/admin.interface';
import { AdminSchema } from './schemas/admins.schema';
import { AdminsService } from './services/admins.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }])
    ],
    providers: [AdminsService],
    exports: [AdminsService]
})
export class AdminsModule { }
