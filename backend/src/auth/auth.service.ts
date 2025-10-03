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

  async signIn({email, password}: LoginDto): Promise<any> {
    const user = await this.userService.findOne(email);
    console.log("Auth service",user)
    if (user?.email !== email) {
      throw new UnauthorizedException("Email is wrong");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid", isPasswordValid)
    if(!isPasswordValid) {
      throw new UnauthorizedException("Password is wrong")
    }
    const payload = {email: user.email};

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
      email
    }
  }

  @UsePipes(new ZodValidationPipe(registerSchema))
  async signUp(registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }
}
