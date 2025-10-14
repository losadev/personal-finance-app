
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UserService } from 'src/user/user.service';
import { AccessTokenPayload } from 'src/lib/types/user.type';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, "refresh-jwt") {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.refreshSecret!,
    });
  }

  async validate(payload: AccessTokenPayload) {
    const user = await this.userService.findByEmail(payload.email);
    return { userId: user?.id, email: user?.email, name: user?.name };
  }
}
