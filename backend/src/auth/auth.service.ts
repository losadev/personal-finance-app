import { BadRequestException, Injectable, UnauthorizedException, UsePipes } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/lib/pipes/zod.pipe';
import { registerSchema } from 'src/schemas/auth.schema';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthJwtPayload } from 'src/lib/types/user.type';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: AuthJwtPayload): Promise<any> {
    
    const payload:AuthJwtPayload = { name: user.name, email: user.email, sub: user.sub };
    
    return {
      user: payload,
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRESIN || '1h',
      })
    };

  }

  async register(registerDto: RegisterDto) {
    return await this.userService.create(registerDto);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
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

  async refreshToken(user: any) {
    try {
      const payload:AuthJwtPayload = await this.jwtService.verifyAsync(
        user.refresh_token,
      );
      
      const refresh_token = this.jwtService.sign(payload, {
        secret: process.env.REFRESH_JWT_SECRET,
        expiresIn: process.env.REFRESH_JWT_EXPIRESIN || '7d',
      });
      
            return {
              refresh_token
            }
      
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token'); 
    }
  }
}
