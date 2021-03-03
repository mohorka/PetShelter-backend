import * as bcrypt from 'bcrypt';

const Salt = parseInt(process.env.SALT, 10);
export async function EncryptPassword(password: string) {
    return await bcrypt.hash(password, Salt);
}
