import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    role: Role;
}

export enum Role {
    USER,
    ADMIN,
}

export const UserSchema = SchemaFactory.createForClass(User);
