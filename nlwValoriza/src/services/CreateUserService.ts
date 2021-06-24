import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { UsersRepositories } from '../repositories/UsersRepositories';

type TUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

class CreateUserService {
  async execute({ name, email, admin = false, password }: TUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error('Email incorrect');

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    try {
      await usersRepository.save(user);
    } catch (error) {
      throw new Error('Could not save.');
    }

    return user;
  }
}

export { CreateUserService };
