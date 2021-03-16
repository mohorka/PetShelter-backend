import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

//export type AdminDocument = Admin & Document;

/*@Schema()
export class Admin {
  //@Prop({ required: true })
  //_id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);*/
export const AdminSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  password: String
});
