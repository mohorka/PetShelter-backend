import { Request, Response, NextFunction } from 'express';
import { EncryptPassword } from '../crypto/encrypt';

export async function logger(req: Request, res: Response, next: NextFunction) {
    console.log(await EncryptPassword('password123'));
    next();
}
