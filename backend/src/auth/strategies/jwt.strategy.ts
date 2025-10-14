
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UserService } from 'src/user/user.service';
import { AccessTokenPayload } from 'src/lib/types/user.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret!,
    });
  }

  async validate(payload: AccessTokenPayload) {
    const user = await this.userService.findByEmail(payload.email);
    console.log("jwtstrategy",user);
    return { userId: user?.id, email: user?.email, name: user?.name };
  }
}
