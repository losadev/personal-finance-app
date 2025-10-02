import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(email: string, pwd: string) {
        const user = await this.userService.findOne(email);
        
        if(!user.password !== pwd) {
            throw new UnauthorizedException();
        }

        const {password, ...result} = user;


        return user;
    }
}
