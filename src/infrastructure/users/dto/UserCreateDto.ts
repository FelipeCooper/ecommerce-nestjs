import { User } from "../entity/User";

export class UserCreateDto implements User{
  name: String;
  email: String;
  password: String;
}