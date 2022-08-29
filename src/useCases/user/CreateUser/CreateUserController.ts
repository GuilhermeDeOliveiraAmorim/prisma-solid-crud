import { Request, Response } from "express";
import { uuid } from "uuidv4";
import { PostgresUsersRepository } from "../../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private persistUser: PostgresUsersRepository
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const id = uuid();

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
            });

            await this.persistUser.save({
                id,
                name,
                email,
                password,
            });

            return response.status(201).send();
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || "Error.",
            });
        }
    }
}

export { CreateUserController };
