import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserType } from 'src/shared/enums';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserFilters } from './dto/user-filters.dto';
import { User } from './entities/user.entity';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const { email, name, password, phone, userType } = createUserInput;
    const [emailAlreadyInUse] = await this.findAll({ email });
    if (emailAlreadyInUse)
      throw new ConflictException(
        'O email já está sendo utilizado em outra conta',
      );

    const encryptedPassword = await hash(
      password,
      parseInt(process.env.SALT_ROUNDS),
    );

    const user = this.usersRepository.create({
      email,
      name,
      password: encryptedPassword,
      phone,
      userType: userType ?? UserType.USER,
    });

    await this.usersRepository.save(user);
    return user;
  }

  async findAll(filters?: UserFilters) {
    const query = this.usersRepository.createQueryBuilder();
    query.where('1 = 1');
    if (filters?.email) {
      query.andWhere('email = :email', { email: filters.email });
    }
    return await query.getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
