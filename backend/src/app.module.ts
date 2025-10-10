import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, PrismaModule],
})
export class AppModule {}
