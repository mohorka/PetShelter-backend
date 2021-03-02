import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from '../schemas/admins.schema';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin.name) private admins: Model<AdminDocument>) { }

  async findOne(username: string): Promise<Admin | undefined> {
    return this.admins.findOne({ name: username }).exec();
  }
}
