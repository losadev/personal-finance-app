import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { RegisterDto } from 'src/schemas/auth.schema';

@Controller('auth') // hace referencia al nombre de la carpeta
export class AuthController {
  constructor(private authService: AuthService) {}

  //   @Post('login')
  //   signIn(@Body() signInDto: Record<string, any>) {
  //     return this.authService.signIn(signInDto.username, signInDto.password);
  //   }

  @Post('signup')
  signUp(@Body() signUpDto: RegisterDto) {
    return this.authService.signUp(signUpDto);
  }
}
