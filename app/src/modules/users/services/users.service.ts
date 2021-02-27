import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private users: Model<UserDocument>) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.findOne({ name: username }).exec();
    }
}
