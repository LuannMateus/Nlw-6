import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

type TUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
};

class CreateUserService {
  async execute({ name, email, admin }: TUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error('Email incorrect');

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error('User already exists');

    const user = usersRepository.create({
      name,
      email,
      admin,
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
