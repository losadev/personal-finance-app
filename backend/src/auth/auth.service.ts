import { Injectable, UnauthorizedException, UsePipes } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/lib/pipes/zod.pipe';
import { registerSchema } from 'src/schemas/auth.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @UsePipes(new ZodValidationPipe(registerSchema))
  async signUp(name: string, email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (user) {
      // indicar que ya eexiste ese email
    }

    return {};
  }
}
