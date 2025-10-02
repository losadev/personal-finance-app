import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client/extension';
import { PrismaService } from 'src/prisma.service';

// This should be a real class/interface representing a user entity
export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.prisma.user.find(
      (user: { id: string; name: string; email: string; password: string }) =>
        user.email === email,
    );
  }

  async create() {
    return this.prisma.create();
  }
}
