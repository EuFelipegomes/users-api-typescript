import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Felipe",
        lastName: "Gomes",
        email: "0felipegs@gmail.com",
        password: "1234",
      },
    ];
  }
}
