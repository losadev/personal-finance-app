
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {

  async findOne(username: string): Promise<User | undefined> {
    
  }
}
