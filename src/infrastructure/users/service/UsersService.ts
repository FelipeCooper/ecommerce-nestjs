import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/UserCreateDto";
import { User } from "./entity/User";

@Injectable()
export class UsersService {
  private readonly users: User[] = []

  create(userCreateDto: UserCreateDto) {
    this.users.push(userCreateDto);
  }

  findAll(): User[] {
    return this.users;
  }
}