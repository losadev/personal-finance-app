import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/lib/types/user.type';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

type CreateUser = Omit<User, 'id'>;
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string): Promise<Record<string, any> | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: {
          equals: email.toLowerCase(),
        },
      },
      select: { id: true },
    });
    return user;
  }

  async create(registerDto: CreateUser) {
    const existingUser = await this.findOne(registerDto.email);

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const salt = Number(process.env.SALT!) ?? 10;
    const password = registerDto.password;
    const hash = await bcrypt.hash(password, salt);

    const newUser = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: hash,
      },
      select: { id: true, name: true, createdAt: true, email: true },
    });

    return newUser;
  }
}
