import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './guard/skipauth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
@Controller('auth') // hace referencia al nombre de la carpeta
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response({passthrough: true}) res):Promise<any | BadRequestException> {
    const { access_token } = await this.authService.login(req.user);

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: false, // En producción, usa 'true', en local "false"
      sameSite: 'lax', 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
      path: '/', // Asegura que la cookie esté disponible en toda la aplicación
    });
    
    return { user: req.user, access_token };
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Body() body) {
    return this.authService.refreshToken(body);
  }

  
  @Public()
  @Post('logout')
  async logout(@Response({ passthrough: true }) res) {
    // Clear the cookie set on login
    res.clearCookie('access_token', { httpOnly: true, secure: false, sameSite: 'lax', path:'/' });
    return { ok: true, message: 'Logged out successfully' };
  }

  @Public()
  @Post('register')
  register(@Body() signUpDto: RegisterDto) {
    return this.authService.register(signUpDto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard) // tu guard que verifica el JWT (desde cookie o header)
  me(@Request() req) {
    return req.user; // el payload del JWT (o un user DTO si prefieres)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/transactions')
  getTransactions(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/pots')
  getPots(@Request() req) {
    return req.user;
  }
}
