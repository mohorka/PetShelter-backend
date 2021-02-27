import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { UnauthorizedException } from 'src/utils/exceptions/exceptions';
import { AuthService } from './services/auth.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
