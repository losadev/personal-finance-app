import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginDto, RegisterDto } from 'src/schemas/auth.schema';
import { AuthGuard } from './guard/auth.guard';
import { Response } from '@nestjs/common';
import { Public } from './guard/skipauth.guard';
@Controller('auth') // hace referencia al nombre de la carpeta
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/signin')
  async signIn(@Body() signInDto: LoginDto, @Response({passthrough:true}) res) {
    const {token, user} = await this.authService.signIn(signInDto, res);

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true, // En producción, usa 'true'
      sameSite: 'lax', // Ajusta según tus necesidades (lax, strict, none)
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
    });
    
    return { user };
  }

  @Public()
  @Post('/signup')
  signUp(@Body() signUpDto: RegisterDto) {
    return this.authService.signUp(signUpDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard) // tu guard que verifica el JWT (desde cookie o header)
  me(@Req() req: Request) {
    return req['user']; // el payload del JWT (o un user DTO si prefieres)
  }

  @UseGuards(AuthGuard)
  @Get('/')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Get('/transactions')
  getTransactions(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Get('/pots')
  getPots(@Request() req) {
    return req.user;
  }
}
