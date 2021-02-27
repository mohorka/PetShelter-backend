import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop({ required: true })
    kind: string;

    @Prop()
    breed?: string;

    @Prop()
    name?: string;

    @Prop()
    age?: number;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
