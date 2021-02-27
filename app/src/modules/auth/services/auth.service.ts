import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import { EncryptPassword } from 'src/utils/crypto/encrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        const encryptPassword = await EncryptPassword(pass);
        if (user && user.password === encryptPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
