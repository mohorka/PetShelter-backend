import { Document } from 'mongoose';
export interface Pet extends Document {
  kind: string;
  breed: string;
  name: string;
  age: number;
}
