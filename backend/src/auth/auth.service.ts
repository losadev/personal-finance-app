import { Injectable, UnauthorizedException, UsePipes } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/lib/pipes/zod.pipe';
import type { LoginDto, RegisterDto } from 'src/schemas/auth.schema';
import { registerSchema } from 'src/schemas/auth.schema';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn({ email, password }: LoginDto, res): Promise<any> {
    const user = await this.userService.findOne(email);

    if (user?.email !== email) {
      throw new UnauthorizedException('Email is wrong');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    const payload = { name: user.name, email: user.email };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRESIN || '7d',
    });

     return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }

  @UsePipes(new ZodValidationPipe(registerSchema))
  async signUp(registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }
}
