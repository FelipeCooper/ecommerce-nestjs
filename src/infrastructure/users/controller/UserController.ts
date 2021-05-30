import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserCreateDto } from "../dto/UserCreateDto";
import { User } from "../entity/User";
import { UsersService } from "../service/UsersService";

@Controller("users")
export class UserController {

  constructor(private usersService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Post()
  async create(@Body() userCreateDto: UserCreateDto) {
    this.usersService.create(userCreateDto);
  }
}