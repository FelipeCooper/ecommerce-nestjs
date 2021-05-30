import { Module } from '@nestjs/common';
import { UserController } from './controller/UserController';
import { UsersService } from './service/UsersService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule { }
