import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

/*export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop({ required: true })
    _id: number;
    @Prop({ required: true })
    kind: string;

    @Prop()
    breed?: string;

    @Prop()
    name?: string;

    @Prop()
    age?: number;
}

export const PetSchema = SchemaFactory.createForClass(Pet);*/
export const PetSchema = new mongoose.Schema({
  //_id: Number,
  kind: String,
  breed: String,
  name: String,
  age: Number
});

autoIncrement.initialize(mongoose.connection); 
PetSchema