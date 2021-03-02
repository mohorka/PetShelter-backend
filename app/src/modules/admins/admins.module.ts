import { Module } from '@nestjs/common';
import { AdminsService } from './services/admins.service';

@Module({
    providers: [AdminsService],
    exports: [AdminsService],
})
export class AdminsModule { }
