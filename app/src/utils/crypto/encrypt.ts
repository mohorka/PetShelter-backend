import * as bcrypt from 'bcrypt';

const Salt = 'youneverguess';
export async function EncryptPassword(password: string) {
    return await bcrypt.hash(password, Salt);
}
