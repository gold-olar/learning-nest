import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Samuel' }];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User  {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserData: CreateUserDto): User {
    const newUser = {
      id: new Date().getSeconds(),
      ...createUserData,
    };

    this.users.push(newUser);

    return newUser;
  }
}
