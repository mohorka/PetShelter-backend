import { Document } from 'mongoose';

export interface Admin extends Document {
    name: string;
    password: string;
}
