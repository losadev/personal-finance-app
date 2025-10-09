import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
