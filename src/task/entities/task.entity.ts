import { Type } from "src/type/entities/type.entity";
import { User } from "src/user/entities/user.entity";

export class Task {
  id?: string;
  name?: string;
  user?: User;
  type?: Type;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
