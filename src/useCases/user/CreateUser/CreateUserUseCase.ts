import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
    constructor(
        private usersRepository: IUserRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Guilherme Amorim",
                email: "contato@guilhermeamorim.com",
            },
            subject: "Seja bem-vindo!",
            body: "<p>Você agora faz parte!</p>",
        });
    }
}

export { CreateUserUseCase };
