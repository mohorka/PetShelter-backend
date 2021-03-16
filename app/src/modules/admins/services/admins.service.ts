import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { Admin, AdminDocument } from '../schemas/admins.schema';
import { Admin } from '../interfaces/admin.interface';

@Injectable()
export class AdminsService {
  constructor(@InjectModel('Admin') private admins: Model<Admin>) { }

  async findOne(username: string): Promise<Admin | undefined> {
    console.log ('hello from admin service');
    console.log(username);
    return this.admins.findOne({ name: username }).exec();
  }

  

  
}
