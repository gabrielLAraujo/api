import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

export class UserService {
    private users: User[] = [];
    generateId(): string {
        return uuidv4();
    }
    create(createUserDto: CreateUserDto): User {
        const { name, email, password } = createUserDto;
        const id = this.generateId(); // Assume this method generates a unique ID
        return new User(id, name, email, password);
    }
    findOne(id: string): User {
        const returnedUser = this.users.find((user) => user.id === id);
        if (returnedUser) {
            return returnedUser;
        }else {
            throw new Error('User not found');
        }
    }
    findAll(): User[] {
        return this.users; // This is a placeholder. In a real application, you would fetch all users from a database.
    }        // This is a placeholder. In a real application, you would fetch the user from a database.
}

function uuidv4(): string {
    throw new Error("Function not implemented.");
}
