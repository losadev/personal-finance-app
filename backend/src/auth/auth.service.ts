import { BadRequestException, Injectable, UnauthorizedException, UsePipes } from '@nestjs/common';
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

  async login(user: {id: string, name: string, email: string}): Promise<any> {
    
    const payload = { name: user.name, email: user.email, sub: user.id };
    console.log("service / login", payload);
    return {
      user: payload,
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRESIN || '7d',
      }),
    };

  }

  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    console.log("service / validateUser", user);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(pass, user?.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }
    // If bcrypt.compare succeeded, return user without password
    const { password, ...result } = user;
    return result;
  }
}
