import validator from "validator";
import { User } from "../../models/user";
import { badRequest, created, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserControler implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Field ${field} is required`);
        }
      }

      const someFieldIsNotAllowedToCreate = Object.keys(httpRequest.body!).some(
        (key) => !requiredFields.includes(key as keyof CreateUserParams)
      );

      if (someFieldIsNotAllowedToCreate) {
        return {
          statusCode: 400,
          body: "Some received field is not allowed",
        };
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequest("E-mail is not valid");
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return created<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
