import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [
    UserModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: 'APP_GUARD', // ESTO EVITA TENER QUE USAR @UseGuards EN CADA CONTROLADOR
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
