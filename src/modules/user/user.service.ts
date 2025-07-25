import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {
          console.log('UserService → userRepository =', userRepository);
    }
    private users: User[] = [];
    generateId(): string {
        return uuidv4();
    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        const { name, email, password } = createUserDto;
         try {
    console.log('Tentando criar usuário...');
    const result = await this.userRepository.create({
      name: name,
      email: email,
      password: password,
    });
    console.log('Usuário criado com sucesso:', result);
    return result;
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    throw err; // não engole o erro
  }
    }
    findOne(id: string): User {
        const returnedUser = this.users.find((user) => user.id === id);
        if (returnedUser) {
            return returnedUser;
        }else {
            throw new Error('User not found');
        }
    }
    findByEmail(email: string): User | null {
        const user = this.users.find((user) => user.email === email);
        return user || null;
    }
    findAll(): User[] {
        return this.users; 
    }       
}

function uuidv4(): string {
    throw new Error("Function not implemented.");
}
