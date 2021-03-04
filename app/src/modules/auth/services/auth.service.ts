import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/modules/admins/services/admins.service';
import { EncryptPassword } from 'src/utils/crypto/encrypt';

@Injectable()
export class AuthService {
    constructor(
        private adminService: AdminsService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.adminService.findOne(username);
        console.log('User from db');
        console.log(user);
        //const encryptPassword = await EncryptPassword(pass);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            console.log('some result');
            console.log(result);
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.name, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
