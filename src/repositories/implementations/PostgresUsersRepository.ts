import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class PostgresUsersRepository implements IUserRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}

export { PostgresUsersRepository };
